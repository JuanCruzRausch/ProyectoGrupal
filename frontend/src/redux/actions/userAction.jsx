import axios from "axios"

export const SET_USER = "SET_USER"

export function setUser(data) {
    return async (dispatch) => {
      return axios.get(`http://localhost:5050/commonuser/${data.email}`)
      .then(res => dispatch({type:SET_USER, payload: res.data.data}))
    }
  }
  