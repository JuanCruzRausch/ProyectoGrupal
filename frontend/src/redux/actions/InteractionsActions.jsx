const GET_TRANSACTION = "GET_TRANSACTION"
import axios from 'axios'

export const getTransaction = (queries) =>{
    
    return async (dispatch) => {
        axios.post("http://localhost:5050/payment/capture-order"+queries)
        .then((res)=> console.log(res))
    }
}