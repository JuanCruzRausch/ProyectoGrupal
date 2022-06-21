export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
import products from '../../components/Json/data'

export function getAllProducts(){
    return (dispatch)=> {
        dispatch({
           type: GET_ALL_PRODUCTS,
           payload: [...products]
        })
    }
}