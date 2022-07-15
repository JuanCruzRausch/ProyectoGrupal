const GET_TRANSACTION = 'GET_TRANSACTION';
import axios from 'axios';


export const getTransaction = (queries) => {
  return async (dispatch) => {
    dispatch({type: "SET_LOADING", payload: "spin"})
    axios(`/payment/capture-order` + queries).then(
      (res) => {
        dispatch({type: "SET_LOADING", payload: "none"})
        dispatch({ type: 'CLEAR_CART' });
        dispatch({ type: 'SET_TRANSACTION_DETAIL', payload: res.data.data});
      }
    )
    .catch(()=>{
      dispatch({type: "SET_LOADING", payload: "none"})
      dispatch({ type: 'CLEAR_CART' })})

  };
};

export const sendReview = (publication_id, seller_id, user_id, review) =>{
  return async (dispatch) => {
    axios.patch(`/reputation/${publication_id}/${seller_id}/${user_id}`, review)
    .then((res)=> console.log(res))
  }
}
