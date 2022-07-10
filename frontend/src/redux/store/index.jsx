import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../reducer/productReducer';
import CartReducer from '../reducer/CartReducer'
import userReducer from '../reducer/userReducer'
import FavReducer from '../reducer/FavReducer';
import darkModeReducer from '../reducer/DarkmodeReducer';
import interactionsReducer from "../reducer/InteractionsReducer"
import adminReducer from '../reducer/adminReducer';
const initialState = {};

const rootReducer = combineReducers({
  interactionsReducer,
  productReducer,
  CartReducer,
  userReducer,
  FavReducer,
  adminReducer,
  darkMode: darkModeReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
