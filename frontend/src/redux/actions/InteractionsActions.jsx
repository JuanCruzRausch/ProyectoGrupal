const GET_TRANSACTION = 'GET_TRANSACTION';
import axios from 'axios';

export const getTransaction = (queries) => {
  return async (dispatch) => {
    axios('http://localhost:5050/payment/capture-order' + queries).then(
      (res) => {
        //PARA PROBAR!!!!
        //if (res.data.data.transactions[0].status === 'pending') {
        dispatch({ type: 'CLEAR_CART' });
        //  }
        dispatch({ type: 'SET_TRANSACTION_DETAIL', payload: res});
      }
    );
  };
};
