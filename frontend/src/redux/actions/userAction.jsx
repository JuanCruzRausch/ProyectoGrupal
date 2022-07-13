import axios from "axios"

export const SET_USER = "SET_USER"
export const SET_SELLER = "SET_SELLER"
export const SET_SALES = "SET_SALES"
export const SET_PURCHASES = "SET_PURCHASES"

export function addSeller (data) {
  return async (dispatch) => {
    return axios.post("http://localhost:5050/seller", data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
}
export function updateSeller (data) {
  return async (dispatch) => {
    return axios.patch("http://localhost:5050/seller", data)
    .then(res => dispatch({type:SET_SELLER , payload:res.data.data}))
  }
}

export function patchToSeller (id) {
  return async (dispatch) => {
    return axios.patch("http://localhost:5050/commonuser/toSeller/"+id)
  }
}

export function setSeller (id) {
  return async (dispatch) => {
    return axios.get("http://localhost:5050/seller/"+id)
    .then(res=>dispatch({type: SET_SELLER, payload: res.data.data.seller }))
    .catch(err=> {})
  }
}

export function setUser(data) {
    return async (dispatch) => {
      return axios.get(`http://localhost:5050/commonuser/${data.email}`)
      .then(res => {
        // res.data.data.role==="seller"?
        // axios(`http:localhost:5050/user/`)
        dispatch({type:SET_USER, payload: res.data.data})
      })
      .catch(error=> console.log(error))
    }
  }
  
export function updateUser(data) {
  return async (dispatch) => {
    return axios.patch(`http://localhost:5050/commonuser/updateUser`, data)
    .then(response=> console.log(response))
  }
}

export function getSales (seller_id) {
  return async (dispatch) => {
    return axios(`http://localhost:5050/seller/transactions-seller/${seller_id}`)
    .then(res => dispatch({type: SET_SALES , payload: res.data.data.transaction }))
  }
}

export function getPurchases (user_id) {
  return async (dispatch) => {
    return axios(`http://localhost:5050/commonuser/purchase-user/${user_id}`)
    .then(res =>  dispatch({type: SET_PURCHASES , payload: res.data.data.transaction }))
  }
}

export function reject (transaction, user_id) {
  return async (dispatch) => {
    return axios.patch(`http://localhost:5050/payment/purchase-canceled/${transaction}`)
    .then((res)=>axios(`http://localhost:5050/seller/transactions-seller/${seller_id}`)
    .then(res => dispatch({type: SET_SALES , payload: res.data.data.transaction })))
  }
}

export function arrived (transaction, user_id) {
  return async (dispatch) => {
    return axios.patch(`http://localhost:5050/payment/purchase-arrived/${transaction}`)
    .then((res)=> axios(`http://localhost:5050/commonuser/purchase-user/${user_id}`)
    .then(res =>  dispatch({type: SET_PURCHASES , payload: res.data.data.transaction })))
  }
}