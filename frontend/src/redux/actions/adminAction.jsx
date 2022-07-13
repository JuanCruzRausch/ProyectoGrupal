import axios from 'axios'
import url from '../../ulr'
export const GET_ALL_USER = "GET_ALL_USER"
export const LOCK_USER = "LOCK_USER"
export const SAVE_TOKEN = "SAVE_TOKEN"
export const ADMIN_DATA = "ADMIN_DATA"
export const ALL_SALES_LAST_MONTH = 'ALL_SALES_LAST_MONTH'

export function getUsers (token) {

    return async (dispatch)=>{
        dispatch({type:SAVE_TOKEN, payload: token})
        axios(`${url}/stats/listUsers`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response => dispatch({type: GET_ALL_USER, payload:response.data.data}))

    }
}
export function lockUser (userId, token) {
    return async(dispatch)=>{
        console.log(userId)
        axios.delete(`${url}/commonuser/block/${userId}?block=true`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } )
        .then((res)=>{
            console.log(res)
            axios(`${url}/stats/listUsers`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
            })
            .then(response => dispatch({type: GET_ALL_USER, payload:response.data.data}))
        })
    }

}

export function unlockUser (userId, token) {
    return async(dispatch)=>{
        console.log(userId)
        axios.delete(`${url}/commonuser/block/${userId}?block="false"`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } )
        .then((res)=>{
            console.log(res)
            axios(`${url}/stats/listUsers`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
            })
            .then(response => dispatch({type: GET_ALL_USER, payload:response.data.data}))
        })
    }
}

export function getAdminData(){
    return async (dispatch) =>{
        axios(`${url}/stats/getresults`)
        .then(res => dispatch({type:ADMIN_DATA, payload: res.data.data}))
    }
}

export function getAllSalesLastMonth  () {
    return async (dispatch) => {
      return axios(`${url}/stats/getAllSales`)
      .then(res=> dispatch({type: ALL_SALES_LAST_MONTH, payload: res.data.data }))
    }
  }