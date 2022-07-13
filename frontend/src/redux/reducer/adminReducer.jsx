
import { GET_ALL_USER, SAVE_TOKEN, ADMIN_DATA, ALL_SALES_LAST_MONTH } from '../actions/adminAction'
const initialState = {
    allUsers: null,
    token:"", 
    adminData:null,
    allSalesLastMonth: null
}

export default function adminReducer(state = initialState, { type, payload }){
    switch (type){
        case GET_ALL_USER: 
            return {...state, allUsers: payload}
        case SAVE_TOKEN:
            return {...state, token: payload}
        case ADMIN_DATA:
            return {...state, adminData: payload}    
        case ALL_SALES_LAST_MONTH:
            return {...state, allSalesLastMonth: payload}
        default: return state
    }
}