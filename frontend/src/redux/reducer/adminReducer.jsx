
import { GET_ALL_USER } from '../actions/adminAction'
const initialState = {
    allUsers: null
}

export default function adminReducer(state = initialState, { type, payload }){
    switch (type){
        case GET_ALL_USER: 
            return ({...state, allUsers: payload})
            default: return state
    }
}