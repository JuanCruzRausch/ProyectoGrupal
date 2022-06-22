export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ORDENADO = 'ORDENADO';
import products from '../../components/Json/data';

export function getAllProducts() {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: [...products],
    });
  };
}

export const ordenado = (payload) => {
  return {
    type: ORDENADO,
    payload,
  };
};
