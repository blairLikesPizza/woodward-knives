import axios from 'axios';

const initialState = {
    user: {},
    knives: [],
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

// ACTION CREATORS

const GET_USER_INFO        = "GET_USER_INFO";
const GET_KNIVES           = "GET_KNIVES";

// REDUCER FUNCTION

export default function reducer(state = initialState, action){          //setting state = initialState just makes it so that if state is  
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
         return Object.assign({}, state, { user: action.payload })
        case GET_KNIVES + '_FULFILLED':
         return Object.assign({}, state, { knives: action.payload })
        default:
            return state;
    }                                                    //which only matters the first time it's booted up
}   

// ACTION CREATORS

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

export function getKnives(){
   const knivesData = axios.get('/api/knives')
        .then(res => {
            return res.data
        })
    return {
        type: GET_KNIVES,
        payload: knivesData
    }
}