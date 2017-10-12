import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

class Cart extends Component{
    render(){
        return(
            <div className="cart_main_container">
                <h1>Cart Page</h1>
                <Link to="/checkout"><button>Checkout</button></Link>
            </div>
        )
    }
}

export default Cart;