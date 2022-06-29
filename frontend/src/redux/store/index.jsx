import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../reducer/index';
import CartReducer from '../reducer/CartReducer'
const initialState = {};

const rootReducer = combineReducers({
  productReducer,
  CartReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
