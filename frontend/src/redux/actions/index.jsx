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
export function publicationSeller (seller_id) {
  return async (dispatch) => {
    return axios("http://localhost:5050/publicationtest/sellerpublications/"+seller_id)
    .then(res => dispatch({type:PUBLICATION_SELLER, payload: res.data.data}))
    // .then(res => dispatch({type: PUBLICATION_SELLER, payload: res.data.data}))
  }
}

export function setAlert() {
  return {type: PUBLICATION_ALERT, payload: "none"}
}


export function addPublication( id,data ) {
  return async (dispatch) => {
    return axios.post("http://localhost:5050/publicationtest/"+id, data)
    .then(res => dispatch({type: PUBLICATION_ALERT, payload: "success"}))
    .catch(res=> dispatch({type: PUBLICATION_ALERT, payload: "error"}))
  }
}

export function sort (atribute){
  console.log(atribute)
  return async (dispatch) =>{
    return axios(`http://localhost:5050/publicationtest/?sort=${atribute}`)
    .then(res => dispatch({type: GET_ALL_PRODUCTS, payload: res.data.data.publications}))
  }
}

export function getAllProducts() {
  return async (dispatch) => {
    dispatch({type:SET_LOADING, payload:"spin"})
    return axios(`http://localhost:5050/publicationtest?page=1` )
     .then(res => 
      dispatch({type:GET_ALL_PRODUCTS, payload: res.data.data.publications}),
    )
  }
}

export function GetSingleProduct(id){
  return async(dispatch) => {
          axios("http://localhost:5050/publicationtest/" + id)
          .then(res=> 
              dispatch({ type: SINGLE_ITEM, payload:res.data.data.publi})
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
    return (await axios(`http://localhost:5050/publicationtest/byName/${title}?price[lte]=${max}&price[gte]=${min}`)
      .then((res)=>{
        console.log(res.data.data)
        return dispatch({
          type: GET_PRODUCT,
          payload: res.data.data
        })
      })
    )}
}

export function getProductByCategory(id, min, max, sort) {
  return async (dispatch) => {
    dispatch({type:SET_LOADING, payload:"spin"})
    return axios(`http://localhost:5050/publicationtest?sort=${sort}&category=${id}&price[lte]=${max}&price[gte]=${min}` )
    .then(res=> {
      dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: res.data.data.publications})
    })
  };
}
export function deleteProduct(id,userID){
  return async (dispatch) => {
    return axios.post("http://localhost:5050/seller/"+id+"/"+userID)
    .then(res =>{
      dispatch({type: DELETE_PUBLICATION, id})
    })
  }
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

// export function ordenado(payload) {
//   return (dispatch) => {
//     dispatch({
//       type: ORDENADO,
//       payload,
//     });
//   };
// }