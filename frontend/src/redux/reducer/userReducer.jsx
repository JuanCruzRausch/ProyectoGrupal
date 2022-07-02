import {SET_USER} from '../actions/userAction.jsx'



const initialState={
    user:null
};

function userReducer (state = initialState, { type, payload}) {
    switch(type){
        case SET_USER: return {...state, user:payload}
        default: return state
    }
};

export default userReducer;