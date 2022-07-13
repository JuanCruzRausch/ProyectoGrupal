import {SET_USER, SET_SELLER, SET_SALES, SET_PURCHASES} from '../actions/userAction.jsx'



const initialState={
    user:null,
    seller:{social_net:null, subsidiary:null},
    sales: [],
    purchases: []
};

function userReducer (state = initialState, { type, payload}) {
    switch(type){
        case SET_SALES: return {...state, sales: payload}
        case SET_USER: return {...state, user: payload}
        case SET_SELLER: return {...state, seller: payload}
        case SET_PURCHASES: return {...state, purchases: payload}
        default: return state
    }
};

export default userReducer;