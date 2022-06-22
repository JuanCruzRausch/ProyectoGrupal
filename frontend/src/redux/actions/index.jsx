export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const ORDENADO = 'ORDENADO';
import products from '../../components/Json/data';

export function getProductByCategory() {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: [...products],
    });
  };
}

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
