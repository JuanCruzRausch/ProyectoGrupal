import {SET_USER, SET_SELLER} from '../actions/userAction.jsx'



const initialState={
    user:null,
    seller:{social_net:null, subsidiary:null}
};

function userReducer (state = initialState, { type, payload}) {
    switch(type){
        case SET_USER: return {...state, user:payload}
        case SET_SELLER: return {...state, seller:payload}
        default: return state
    }
};

export default userReducer;