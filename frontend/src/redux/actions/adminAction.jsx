import axios from 'axios'
export const GET_ALL_USER = "GET_ALL_USER"

export function getUsers (token) {
    console.log(token)
    return async (dispatch)=>{
        axios("http://localhost:5050/stats/listUsers",{
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response => dispatch({type: GET_ALL_USER, payload:response.data.data}))

    }
}