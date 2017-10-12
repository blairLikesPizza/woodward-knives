import React, { Component } from 'react';
import './Private.css';
import { getUserInfo } from './../../ducks/reducer.js';
import { connect } from 'react-redux';

class Private extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount(){
       this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Woodward Custom Knives</h1><hr />
                <h4>User Information</h4>
                { user.id ? <img className='avatar' src={user.img} alt=""/> : null }
                <p>Username: { user.id ? user.user_name : null }</p>
                <p>Email: { user.id ? user.email : null }</p>
                <p>ID: { user.id ? user.auth_id : null }</p>
                <a href='http://localhost:3005/auth/logout'><button>Log Out</button></a>
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log("state from private", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Private);