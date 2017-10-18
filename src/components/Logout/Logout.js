import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component {
    render() {
        return (
            <div className="logout_main_container">
                <div className="logout_button_container">
                    <div className="button_name">
                        <a href='http://localhost:3005/auth/logout'>Log Out</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logout;