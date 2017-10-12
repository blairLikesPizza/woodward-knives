import React, { Component } from 'react';
import './CartBubble.css';
import { Link } from 'react-router-dom';

class CartBubble extends Component {
    render() {
        return (
            <div className="cartbubble_main">
                <Link to="/cart"><div className="bubble">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" alt=""></img>
                </div>
                </Link>
            </div>
        )
    }
}

export default CartBubble;