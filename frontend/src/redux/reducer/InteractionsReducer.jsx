

const initialState = {
    chat: [],
    transaction: 'none'
}

export default function interactionReducer( state= initialState, {type, payload}){
    switch(type){
        case "SET_CHAT":
            return {...state, chat: [...payload]}
        case "SET_TRANSACTION":
            return {...state, transaction: payload}
        default: return state
    }

}

