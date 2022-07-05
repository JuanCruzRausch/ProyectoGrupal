import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const ORDENADO = 'ORDENADO';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const SET_PAGE = 'SET_PAGE';
export const SIGN_UP_ALERT = 'SIGN_UP_ALERT';
export const MAX_AND_MIN_PRICE = "MAX_AND_MIN_PRICE";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const PUBLICATION_ALERT = "PUBLICATION_ALERT";
export const COUNT = "COUNT"
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

export function addPublication( data ) {
  return async (dispatch) => {
    return axios.post("http://localhost:5050/publicationtest", data)
    .then(res => dispatch({type: PUBLICATION_ALERT, payload: "success"}))
    .catch(res=> dispatch({type: PUBLICATION_ALERT, payload: "error"}))
  }
}

export function getAllProducts() {
  return async (dispatch) => {
    return axios("http://localhost:5050/publicationtest?page=" + 1)
     .then(res => 
      dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}

export function getAllCategories(){
  const arr=[]
  return async (dispatch) => {
    return axios("http://localhost:5050/categories")
    .then(res =>{ 
      res.data.data.categories.forEach(element => {
        axios("http://localhost:5050/publicationtest?category="+ element._id)
        .then(res2=> {
          arr.push({...element, count: res2.data.results})}) 
        .then(()=> dispatch({type: GET_ALL_CATEGORIES, payload: arr}))   
    })
  })}
}


export function getPaginate(page) {
  return async (dispatch) => {
    return axios("http://localhost:5050/publicationtest?page" + page )
     .then(res => 
      dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
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

export function getProductByCategory(id) {
  return async (dispatch) => {
    return axios("http://localhost:5050/publicationtest?category="+ id)
    .then(res=> {
      console.log(res)
      dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: res.data.data.publications})
    })
  };
}
export function GetProductById(_id){
  return{
    type: GET_PRODUCT_BY_ID,
    payload: _id,
  }
}
export function getAllCategory(payload) {
  return (dispatch) => {
    dispatch({
     type: GET_CATEGORIES,
     payload: [...categorias]
     })
  }
 }

export function ordenado(payload) {
  return (dispatch) => {
    dispatch({
      type: ORDENADO,
      payload,
    });
  };
}