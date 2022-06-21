import products from '../../components/Json/data'
import {GET_ALL_PRODUCTS} from '../actions/index'

const initialState = {
    Allproduct : [...products]
}

function reducer (state= initialState, {type, payload}){
    switch(type){
        case GET_ALL_PRODUCTS:{
            return {
                ...state,
                Allproduct: payload,
            }
        }
        default: return state
    }
}

export default reducer;