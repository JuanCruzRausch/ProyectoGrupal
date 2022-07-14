import { setSeller } from './userAction';

import axios, { Axios } from 'axios'
export const PUBLICATION_SELLER = "PUBLICATION_SELLER"
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const ORDENADO = 'ORDENADO';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const SET_PAGE = 'SET_PAGE';
export const SIGN_UP_ALERT = 'SIGN_UP_ALERT';
export const PRICE = "PRICE";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const PUBLICATION_ALERT = "PUBLICATION_ALERT";
export const COUNT = "COUNT";
export const SINGLE_ITEM = "SINGLE_ITEM";
export const SET_LOADING = "SET_LOADING";
export const DELETE_PUBLICATION = "DELETE_PUBLICATION";
export const SET_ORDER = "SET_ORDER"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_CATEGORIES_STATS = "SET_CATEGORIES_STATS"
// import categorias from '../../components/Json/Categorias'

export function signUp(data) {
  return async (dispatch) => {
    return axios.post(`/users/signup`,{
      ...data,
      photo:"",
    })
    .then(res => dispatch({type:SIGN_UP_ALERT, payload: res.data?.status }))
    .then(()=> dispatch({type:SIGN_UP_ALERT, payload: "none"}))
    .catch(e=> dispatch({type:SIGN_UP_ALERT, payload: "fail" }))
    .then(()=> dispatch({type:SIGN_UP_ALERT, payload: "none"}))

  }
}
export function publicationSeller (seller_id) {
  return async (dispatch) => {
    return axios(`/Seller/`+seller_id)
    .then(res => dispatch({type:PUBLICATION_SELLER, payload: res.data.data.sell}))
    // .then(res => dispatch({type: PUBLICATION_SELLER, payload: res.data.data}))
  }
}

export function setAlert() {
  return {type: PUBLICATION_ALERT, payload: "none"}
}


export function addPublication( id,data ) {
  return async (dispatch) => {
    return axios.post(`/publicationtest/`+id, data)
    .then(res => {
      dispatch({type:SET_LOADING, payload:"none"})
      dispatch({type: PUBLICATION_ALERT, payload: "success"})})
    .catch(res=> {
      dispatch({type:SET_LOADING, payload:"none"})
      dispatch({type: PUBLICATION_ALERT, payload: "error"})})
  }
}

export function sort (atribute){
  console.log(atribute)
  return async (dispatch) =>{
    return axios(`/publicationtest/?sort=${atribute}`)
    .then(res => dispatch({type: GET_ALL_PRODUCTS, payload: res.data.data.publications}))
  }
}

export function getAllProducts() {
  return async (dispatch) => {
    dispatch({type:SET_LOADING, payload:"spin"})
    return axios(`/publicationtest?page=1` )
     .then(res => 
      dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}

export function GetSingleProduct(id){
  return async(dispatch) => {
          axios(`/publicationtest/` + id)
          .then(res=> 
              dispatch({ type: SINGLE_ITEM, payload:res.data.data.publi})
      )
  }         
}

export function getAllCategories(){
  const arr=[]
  return async (dispatch) => {
    axios(`/categories`)
    .then(res =>{ 
      dispatch({type: GET_ALL_CATEGORIES, payload: res.data.data.categories})}) 
    axios(`/stats/getcategoriesQ`)
        .then(res=> {
          dispatch({type: SET_CATEGORIES_STATS, payload: res.data.data})
        })
        .then(()=> {})   
    }
}


export function getPaginate(page) {
  return async (dispatch) => {
    return axios(`/publicationtest?page` + page )
     .then(res => 
      dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}

export function setMaxMinPrice(filterPrice){
  
  return { type: PRICE, payload: filterPrice }
}

export function setActive(page) {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export function BuscarProducto(title, min, max){
  return async (dispatch)=>{
    dispatch({type:SET_LOADING, payload:"spin"})
    let name = title? `/byName/${title}`: "";
    let valMin = min === -Infinity? "" : `price[gte]=${min}`
    let valMax = max === Infinity? "" : `price[lte]=${max}`
    return (await axios(`/publicationtest${name}?${valMax}&${valMin}`)
      .then((res)=>{
        return dispatch({
          type: GET_PRODUCT,
          payload: Array.isArray(res.data.data)? res.data.data : res.data.data.publications
        })
      })
    )}
}

export function getProductBy(cat, min, max, sort) {
  return async (dispatch) => {
    let category = cat?`&category=${cat}`:null
    let order = sort?`&sort=${sort}`:null
    dispatch({type:SET_LOADING, payload:"spin"})
    return axios(`/publicationtest?price[lte]=${max}&price[gte]=${min}${order}${category}` )
    .then(res=> {
      dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: res.data.data.publications})
    })
  };
}
export function deleteProduct(id,userID){
  return async (dispatch) => {
    return axios.post(`/seller/`+id+"/"+userID)
    .then(res =>{
      dispatch(setSeller(userID))
    })
  }
}
export function inactivePublication (_id, userID){
  return async (dispatch) => {
    return axios.patch(`/seller/`+_id+"/"+userID)
    .then(res =>{
      dispatch(setSeller(userID))
    })
  }
}
export function activePublication (_id, userID){
  return async (dispatch) => {
    return axios.put(`/seller/`+_id+"/"+userID)
    .then(res =>{
      dispatch(setSeller(userID))
    })
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

 export function getCategoriesStats (){
  return async (dispatch) =>{
    axios(`/stats/getcategoriesQ`)
    .then((res)=>dispatch({type: SET_CATEGORIES_STATS, payload: res.data.data}))
  }
}