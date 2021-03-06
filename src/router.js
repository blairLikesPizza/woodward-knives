import React from 'react';
import Shop from './components/Shop/Shop.js';
import Landing from './components/Landing/Landing.js';
import About from './components/About/About.js';
import Services from './components/Services/Services.js';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js';
import Admin from './components/Admin/Admin.js';
import Product from './components/Product/Product.js';
import Contact from './components/Contact/Contact.js';
import Private from './components/Private/Private.js';

import { HashRouter as Router, Route } from 'react-router-dom';

export default(

           <Router>
               <div>
                   <Route component={Landing} exact path='/'/>
                   <Route component={Shop} path='/shop'/>
                   <Route component={About} path='/about'/>
                   <Route component={Services} path='/services'/>
                   <Route component={Cart} path='/cart'/>
                   <Route component={Checkout} path='/checkout'/>
                   <Route component={Admin} path='/admin'/>
                   <Route component={Product} path='/product'/>
                   <Route component={Contact} path='/contact'/>
                   <Route component={Private} path='/private'/>
               </div>
           </Router>
)