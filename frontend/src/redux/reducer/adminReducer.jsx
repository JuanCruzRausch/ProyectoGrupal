
import { GET_ALL_USER, SAVE_TOKEN } from '../actions/adminAction'
const initialState = {
    allUsers: null,
    token:""
}

export default function adminReducer(state = initialState, { type, payload }){
    switch (type){
        case GET_ALL_USER: 
            return {...state, allUsers: payload}
        case SAVE_TOKEN:
            return {...state, token: payload}
            default: return state
    }
}