import axios from "axios"

export const SET_USER = "SET_USER"
export const SET_SELLER = "SET_SELLER"

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
  console.log(id)
  return async (dispatch) => {
    return axios.get("http://localhost:5050/seller/"+id)
    .then(res=>dispatch({type: SET_SELLER, payload: res.data.data.seller[0] }))
    .catch(err=> console.log(err))
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