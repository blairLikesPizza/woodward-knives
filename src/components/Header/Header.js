import React, { Component } from 'react';
import './Header.css';
import Login from './../Login/Login.js';
import { Link } from 'react-router-dom';



class Header extends Component{
    render(){
        return (
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
            </div>
        )
    }
}

export default Header;