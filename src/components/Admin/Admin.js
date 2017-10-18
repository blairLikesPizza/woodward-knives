import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component{
    render(){
        return(
            <div className="admin_main_container">
                <div className="admin_loggedin_container">

                </div>
                <div className="orders_container">

                </div>
               <div className="add_product_container">
                    <button>Add Product</button>
               </div>
            </div>
        )
    }
}

export default Admin;