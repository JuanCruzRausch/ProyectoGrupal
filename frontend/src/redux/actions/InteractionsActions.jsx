const GET_TRANSACTION = "GET_TRANSACTION"
import axios from 'axios'

export const getTransaction = (queries) =>{
    
    return async (dispatch) => {
        axios("http://localhost:5050/payment/capture-order"+queries)
        .then((res)=> {
            // if(res.data.data.status === "success"){

            // }
            dispatch({type:"SET_TRANSACTION_DETAIL", payload:res.data.data})})
    }
}