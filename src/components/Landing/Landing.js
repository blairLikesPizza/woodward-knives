import React, { Component } from 'react';
import './Landing.css';
import CartBubble from '../CartBubble/CartBubble.js';


class Landing extends Component {
    render() {
        return (
            <div className="main_landing_container">
                <div className="cart_bubble_container">
                 <CartBubble /> 
                </div>
                <h1 className="featured_knife_heading">Featured Knife</h1>
                     
                <div className="featured_knife_container">
                    <div className="featured_knife_img_container">
                       <img className="featured_knife" src="http://cdn.hiconsumption.com/wp-content/uploads/2017/01/Torbe-Custom-Knives-Jangle-Buster-00.jpg" alt=""></img>
                    </div>
                    <div className="featured_knife_desc_container">
                        <p>Name - 7" Tactical Hunter</p>
                        <p>Handle Material - G10</p>
                        <p>Steel - S30V</p>
                        <p>Price - $329</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Landing;