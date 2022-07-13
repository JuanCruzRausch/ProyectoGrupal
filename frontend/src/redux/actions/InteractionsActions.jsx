const GET_TRANSACTION = 'GET_TRANSACTION';
import axios from 'axios';
import url from '../../ulr';

export const getTransaction = (queries) => {
  return async (dispatch) => {
    axios(`${url}/payment/capture-order` + queries).then(
      (res) => {
        //PARA PROBAR!!!!
        //if (res.data.data.transactions[0].status === 'pending') {
        dispatch({ type: 'CLEAR_CART' });
        //  }
        dispatch({ type: 'SET_TRANSACTION_DETAIL', payload: res.data.data});
      }
    )
    .catch(()=> dispatch({ type: 'CLEAR_CART' }))
  };
};

export const sendReview = (publication_id, seller_id, user_id, review) =>{
  return async (dispatch) => {
    axios.patch(`http://localhost:5050/reputation/${publication_id}/${seller_id}/${user_id}`, review)
    .then((res)=> console.log(res))
  }
}
