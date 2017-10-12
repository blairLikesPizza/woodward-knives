import axios from 'axios';

const initialState = {
    user: {},
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    price: 0,
    productImage: '',
    userImage: '',
    addressOne: '',
    addressTwo: '',
    addressThree: ''
}

const GET_USER_INFO = "GET_USER_INFO";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PRICE = "UPDATE_PRICE";
const UPDATE_PRODUCT_IMAGE = "UPDATE_PRODUCT_IMAGE";
const UPDATE_USER_IMAGE = "UPDATE_USER_IMAGE";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";



export default function reducer(state = initialState, action) {          //setting state = initialState just makes it so that if state is  
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
         return Object.assign({}, state, { user: action.payload })

        default:
            return state;
    }                                                    //which only matters the first time it's booted up
}   


export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}