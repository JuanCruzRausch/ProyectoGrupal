

const initialState = {
    chat: [],
    transaction: 'none',
    transactionDetail:null

}
export default function interactionReducer( state= initialState, {type, payload}){
    switch(type){
        case "SET_CHAT":
            return {...state, chat: [...payload]}
        case "SET_TRANSACTION":
            return {...state, transaction: payload}
        case "SET_TRANSACTION_DETAIL":
            return {...state, transactionDetail: payload}
        default: return state
    }

}

