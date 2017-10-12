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
      <div className="Checkout">
         <StripeCheckout
           token={this.onToken}
           stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
           amount={5000}
           />
      </div>
    );
  }
}
    
export default Checkout;