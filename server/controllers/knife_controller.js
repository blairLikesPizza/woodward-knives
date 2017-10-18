module.exports = {

getKnives: function(req, res, next) {
        const db = app.get("db");
        // const knives = req.knives.id; // when getting one knife, pass in req.params.knifeid

        db.get_knives() // no argument needed for getting all knives
        // db.get_knives([knives])
        .then(knives => {
            console.log('knives array', knives)
            res.status(200).send(knives)
        })
    }
}