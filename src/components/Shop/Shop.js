import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Shop.css';
import { getKnives } from './../../ducks/reducer.js';


class Shop extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     knives: []
        // }
    }

    componentDidMount() {
        const { getKnives } = this.props;
        getKnives()
        // call getKnives
    }

    addToCart(){

    }



    render() {
        // map through array of objects and display html below for each
        const knives = this.props.knives
        console.log(knives)
        return (
            <div className="root_shop">
            <div className="main_shop_container">
                
                <div className="knife_tiles_container">
                    <h1 className="shop_header">Shop</h1><hr /><hr />
                    {knives.map((element, i) => (
                            <div className="knife_tile" key={i}>
                                <p className="knife_tile_img">{element.id ? <img className='knife_img' src={element.img} alt="" /> : null}</p>
                            <div className="knife_description">
                                <p className="knife_title">{element.id ? element.knife_name : null}</p>
                                <p>{element.id ? element.description : null}</p>
                                <p>Handle Material: {element.id ? element.handle_material : null}</p>
                                <p>Steel: {element.id ? element.steel_type : null}</p>
                                <p>Blade Length: {element.id ? element.blade_length : null} inches</p>
                                <p>Overall Length: {element.id ? element.overall_length : null} inches</p>
                                <p>Price: ${element.id ? element.price : null}</p>
                                <button className="add_button">Add To Cart</button>
                                </div>
                            </div>
                        )
                    )}

                </div>
            </div>
            </div>

        )
    }
}


function mapStateToProps(state) {
    const { knives } = state;
    console.log(state.knives)
    return {
        knives
    }
}
export default connect(mapStateToProps, { getKnives })(Shop)