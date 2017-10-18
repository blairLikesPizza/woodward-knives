import React, { Component } from 'react';
import './Subheader.css';
import Logout from './../Logout/Logout.js';
import CartBubble from './../CartBubble/CartBubble.js';
import { Link } from 'react-router-dom';


class Subheader extends Component {
    render() {
        return (
            <div className="subheader_container">
                <CartBubble />
                <Logout />
                
            </div>
        )
    }
}

export default Subheader;