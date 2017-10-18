import React, { Component } from 'react';
import './Header.css';
import Login from './../Login/Login.js';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="root_header_wrapper">
                <div className="header_main_wrapper">
                    <Link to='/'><div className="logo_wrapper">
                        WOODWARD KNIVES
                </div>
                    </Link>
                    <nav className="nav_container">
                        <p><Link to="/shop">SHOP</Link></p>
                        <p><Link to="/services">SHARPENING</Link></p>
                        <p><Link to="/about">ABOUT</Link></p>
                        <p><Link to="/contact">CONTACT</Link></p>

                        <Login />
                    </nav>
                    <div className="hamburger_container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Menu%2C_Web_Fundamentals_%28White%29.svg/2000px-Menu%2C_Web_Fundamentals_%28White%29.svg.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;