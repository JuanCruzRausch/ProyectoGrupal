import axios from 'axios'
export const GET_ALL_USER = "GET_ALL_USER"
export const LOCK_USER = "LOCK_USER"
export const SAVE_TOKEN = "SAVE_TOKEN"

export function getUsers (token) {

    return async (dispatch)=>{
        dispatch({type:SAVE_TOKEN, payload: token})
        axios("http://localhost:5050/stats/listUsers",{
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
        axios.delete(`http://localhost:5050/commonuser/block/${userId}?block=true`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } )
        .then(()=>{
            axios("http://localhost:5050/stats/listUsers",{
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
        axios.delete(`http://localhost:5050/commonuser/block/${userId}?block=true`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } )
        .then(()=>{
            axios("http://localhost:5050/stats/listUsers",{
                headers: {
                  Authorization: `Bearer ${token}`
                }
            })
            .then(response => dispatch({type: GET_ALL_USER, payload:response.data.data}))
        })
    }

}