import React, { Component } from 'react';
import './Landing.css';
import CartBubble from '../CartBubble/CartBubble.js';
import Logout from '../Logout/Logout.js';


class Landing extends Component {
    render() {
        return (
            <div className="main_landing_container">
                
                <h1 className="featured_knife_heading">Featured Knife</h1>
                     
                <div className="featured_knife_container">
                    <div className="featured_knife_img_container">
                       <img className="featured_knife" src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/12987153_1081458968586201_3001825154775039564_n.jpg?oh=4183b3bd419cc785779754bb59888957&oe=5A41D240" alt=""></img>
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