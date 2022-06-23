export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const ORDENADO = 'ORDENADO';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
import products from '../../components/Json/data';
// import categorias from '../../components/Json/Categorias'

export function BuscarProducto(title){
  return function (dispatch){
    return dispatch({
      type: GET_PRODUCT,
      payload: title
    })
  }
}

export function getProductByCategory(payload) {
  return {
      type: GET_PRODUCTS_BY_CATEGORY,
      payload
  };
}

// export function getAllCategory(payload) {
//   return (dispatch) => {
//     dispatch({
//       type: GET_CATEGORIES,
//       payload: [...categorias]
//     })
//   }
// }

export function getAllProducts() {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: [...products],
    });
  };
}

export function ordenado(payload) {
  return (dispatch) => {
    dispatch({
      type: ORDENADO,
      payload,
    });
  };
}
