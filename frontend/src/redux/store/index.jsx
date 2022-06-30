import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../reducer/products';
import CartReducer from '../reducer/CartReducer'
import userReducer from '../reducer/userReducer'
const initialState = {};

const rootReducer = combineReducers({
  productReducer,
  CartReducer,
  userReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
