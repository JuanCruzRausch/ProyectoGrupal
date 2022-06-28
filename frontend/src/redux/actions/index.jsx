import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const ORDENADO = 'ORDENADO';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const SET_PAGE = 'SET_PAGE';
export const SIGN_UP_ALERT = 'SIGN_UP_ALERT'
export const MAX_AND_MIN_PRICE = "MAX_AND_MIN_PRICE"
// import categorias from '../../components/Json/Categorias'
export function signUp(data) {
  return async (dispatch) => {
    return axios.post("http://localhost:5050/users/signup",{
      ...data,
      photo:"",
    })
    .then(res => dispatch({type:SIGN_UP_ALERT, payload: res.data?.status }))
    .then(()=> dispatch({type:SIGN_UP_ALERT, payload: "none"}))
    .catch(e=> dispatch({type:SIGN_UP_ALERT, payload: "fail" }))
    .then(()=> dispatch({type:SIGN_UP_ALERT, payload: "none"}))

  }
}

export function getAllProducts() {
  return async (dispatch) => {
    return axios("http://localhost:5050/publication?page=" + 1 + "&&limit=640")
     .then(res => dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}


export function getPaginate(page) {
  return async (dispatch) => {
    return axios("http://localhost:5050/publication?page=" + page + "&&limit=100")
     .then(res => dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}

export function setMaxMinPrice(filterPrice){
  return { type: MAX_AND_MIN_PRICE, payload: filterPrice }
}

export function setActive(page) {
  return {
    type: SET_PAGE,
    payload: page
  }
}

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
export function GetProductById(_id){
  console.log(_id);
  return{
    type: GET_PRODUCT_BY_ID,
    payload: _id,
  }
}
// export function getAllCategory(payload) {
//   return (dispatch) => {
//     dispatch({
//       type: GET_CATEGORIES,
//       payload: [...categorias]
//     })
//   }
// }

export function ordenado(payload) {
  return (dispatch) => {
    dispatch({
      type: ORDENADO,
      payload,
    });
  };
}
