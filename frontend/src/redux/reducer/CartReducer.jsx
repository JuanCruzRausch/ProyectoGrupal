import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  INCREASE,
  DECREASE,
  SAVE_SHIPPING_ADDRESS
} from '../actions/CartActions';

const CartInitialState = {
  cart: {
    cartItem: [
      ...(JSON.parse(localStorage.getItem('cart')) === null
        ? []
        : JSON.parse(localStorage.getItem('cart'))),
    ],
    shippingAddress: {},
  },
};
function CartReducer(state = CartInitialState, { type, payload }) {

  switch (type) {
    case SAVE_SHIPPING_ADDRESS:
      return {...state, cart: {...state.cart, shippingAddress: {...payload}} }
    case ADD_TO_CART:
      const item = payload;
      
      var TotalPrice = JSON.stringify(state.cart.cartItem.reduce((prev, next)=> prev + next.price, 0));

      localStorage.setItem('prices', JSON.stringify(TotalPrice))

      const product = state.cart.cartItem.find(x => x.product === item.product);

      if (product) {
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItem: state.cart.cartItem.map(x => x.product === product.product ? item : x)
          }
        }
      }
      return {
        ...state,
        cart:{
          ...state.cart,
          cartItem: [...state.cart.cartItem, item] }
        }
        
    case INCREASE :
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: state.cart.cartItem.map((item) => { 
            if(item.product === payload){
              return {...item, quantity:item.quantity+1} 
            }return item 
          })
        }
      }

    case DECREASE:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: state.cart.cartItem.map((item) => { 
            if(item.product === payload){
              return {...item, quantity:item.quantity-1} 
            }return item 
          })
        }
      }

    case REMOVE_FROM_CART:
      const carrito = state.cart.cartItem;

      const filtro = carrito.filter((item) => item.product !== payload);

      TotalPrice = JSON.stringify(state.cart.cartItem.reduce((prev, next)=> prev + next.price, 0));
      TotalPrice = TotalPrice - filtro
      localStorage.setItem('cart', JSON.stringify(filtro));
      localStorage.setItem('prices', JSON.stringify(TotalPrice));
      return {
        ...state,
        cart: { ...state.cart, cartItem: [...filtro] },
      };
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: [...state.cart.filter((item) => item.id !== payload)],
        },
      };
    case CLEAR_CART:
      localStorage.clear();
      return {
        cart: { cartItem: [] },
      };
    default:
      return state;
  }
}
export default CartReducer;
