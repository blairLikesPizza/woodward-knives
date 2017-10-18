import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

class Cart extends Component{
  constructor(props) {
        super(props);

        this.state = {
            cart: []
        }
    }
    render(){
        return(
            <div className="cart_main_container">
                <div className="items_in_cart_container">

                </div>
                <div className="stripe_checkout_button_container">
                    <div className="checkout_button">
                       <Link to="/checkout"><button>Checkout</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;