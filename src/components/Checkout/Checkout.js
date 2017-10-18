import React, { Component } from 'react';
import './Checkout.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Checkout extends Component{
      onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3005/api/payment', { token, amount: 100} ).then(response => {
      alert('Thank you for your purchase!')
    });
  }
0
  render() {
    return (
      <div className="checkout_main_container">
        <div className="shipping_info_container">
          <div className="name_container">
            <h1 className="shipping_header">Ship to:</h1>
          <p>First Name</p>
            <input className="shipping_firstname"/>
            <p>Last Name</p>
            <input className="shipping_lastname"/>
            </div>
            <h1 className="shipping_header">Shipping Info:</h1>
            <div className="address_container">
            <p>Street Address</p>
            <input className="shipping_addressOne"/>
            <p>City</p>
            <input className="shipping_addressTwo"/>
            <p>State</p>
            <input className="shipping_addressThree"/>
            <p>Zip</p>
            <input className="shipping_addressFour"/>
            </div>
            
        </div>
        <div className="stripe_checkout_button_container">
          <div className="stripe_button">
         <StripeCheckout
           token={this.onToken}
           stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
           amount={5000}
           />
           </div>
           </div>
      </div>
    );
  }
}
    
export default Checkout;