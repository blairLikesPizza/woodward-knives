import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='App'>  
                <a href={ process.env.REACT_APP_LOGIN }>LOGIN/SIGN UP</a>
            </div> 
        )
    }
}