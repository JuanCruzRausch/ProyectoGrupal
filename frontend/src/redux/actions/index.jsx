
export const ORDENADO = 'ORDENADO';
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY"
import products from '../../components/Json/data'

export function getProductByCategory(){
    return (dispatch)=>{
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            payload: [...products]
        })
    }
}

export function getAllProducts(){
    return (dispatch)=> {
        dispatch({
           type: GET_ALL_PRODUCTS,
           payload: [...products]
        })
    }
}
export const ordenado = (payload) => {
  return {
    type: ORDENADO,
    payload,
  };
};

