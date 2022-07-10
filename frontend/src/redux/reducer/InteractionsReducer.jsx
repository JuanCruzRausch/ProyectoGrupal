

const initialState = {
    chat: []
}

export default function interactionReducer( state= initialState, {type, payload}){
    switch(type){
        case "SET_CHAT":
            return {...state, chat: [...payload]}
        default: return state
    }

}

