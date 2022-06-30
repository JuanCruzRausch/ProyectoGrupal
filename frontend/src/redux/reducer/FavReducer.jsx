import {
    ADD_TO_FAV,
    REMOVE_FROM_FAV
} from '../actions/FavActions'

const FavInitialState= {
    Favs : [ 
        ...(JSON.parse(localStorage.getItem('favs')) === null
    ? []
    : JSON.parse(localStorage.getItem('favs')))]
}

function FavReducer(state= FavInitialState, {type, payload}){
    switch (type) {
        case ADD_TO_FAV:
            const item = payload;

            localStorage.setItem('favs', JSON.stringify(item))

            const product = state.Favs.find(x => x.product === item.product); 
            if (product) {
              return {
                ...state,
                  Favs: state.Favs.map(x => x.product === product.product ? item : x)
                }
            }
            return {
              ...state,
                Favs: [...state.Favs, item] }
        default: return state
    }
}

export default FavReducer;