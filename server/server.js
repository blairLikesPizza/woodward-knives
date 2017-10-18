                       require('dotenv').config();
const express        = require('express');
const session        = require('express-session');
const bodyParser     = require('body-parser');
const massive        = require('massive');
const passport       = require('passport');
const Auth0Strategy  = require('passport-auth0');
const cors           = require('cors');
const dotenv         = require('dotenv');
const stripe         = require('stripe')( process.env.STRIPE_SECRET_KEY );
      kC             = require('./controllers/knife_controller.js')


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({   //HERE
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());   //TO HERE MUST BE IN THIS ORDER AND IN THIS SPOT IN THIS FILE

massive( process.env.CONNECTION_STRING).then( db => {
    console.log('massive database connected using connection string')
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => {
      //db calls
    const db = app.get('db')
    db.find_user([ profile.identities[0].user_id ]).then( user => {
        if (user[0]){
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([ user.name, user.email, user.picture, user.identities[0].user_id ])
            .then( user => {
                return done(null, user[0].id)
            })
        }
    })
}))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: '/auth'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user){
        return res.status(404).send('User not found.')
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/')
})

passport.serializeUser((id, done) => {

    done(null, id);
})

passport.deserializeUser((id, done) => {
    app.get('db').find_current_user([ id ])
    .then( user => {
        done(null, user[0])
    })
})

app.get('/api/knives', function(req, res, next) {
        const db = app.get("db");
        // const knives = req.knives.id; // when getting one knife, pass in req.params.knifeid

        db.get_knives() // no argument needed for getting all knives
        // db.get_knives([knives])
        .then(knives => {
            console.log('knives array', knives)
            res.status(200).send(knives)
        })
    });
// app.get('/api/knives/:knifeid', kC.getKnives); // possible endpoint for one knife

app.post('/api/payment', (req, res, next) => {
    //this is converting the amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++){
        if (amountArray[i] === '.'){
            if (typeof amountArray[i + 1] === 'string'){
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === 'string'){
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0")
            }

        break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmnt = parseInt(pennies.join(''));
    const charge = stripe.charges.create({
        amount: convertedAmnt,
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, (err, charge) => {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') 
        // {"The card has been declined"}
    })
})

const port = 3005
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})