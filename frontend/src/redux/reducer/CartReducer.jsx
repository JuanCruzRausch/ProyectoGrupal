import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  INCREASE,
  DECREASE,
  SAVE_SHIPPING_ADDRESS,
  ORDER_PRODUCT
} from '../actions/CartActions';

const CartInitialState = {
  cart: {
    cartItem: [
      ...(JSON.parse(localStorage.getItem('cart')) === null
        ? []
        : JSON.parse(localStorage.getItem('cart'))),
    ],
    shippingAddress: 
      localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {}, 
  },
  SingleCart:{
    CartItem:[],
    shippingAddress: 
    localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}, 
  }
};
function CartReducer(state = CartInitialState, { type, payload }) {

  switch (type) {
    case SAVE_SHIPPING_ADDRESS:
      localStorage.setItem('shippingAddress', JSON.stringify(payload));
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
            cartItem: state.cart.cartItem.map((x) => { 
              if(x.product === item.product && x.stock.stockTotal-x.quantity-item.quantity >= 0){
               return {...x, quantity:x.quantity+item.quantity} 
              }
              return x 
            })
            // (x => x.product === product.product ? item : x)
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
    case ORDER_PRODUCT :
      return {
        ...state,
        SingleCart: {
          ...state.SingleCart,
            CartItem: payload
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
      // localStorage.clear();
      return {
        ...state,
        cart: {shippingAddress:{...state.cart.shippingAddress}, cartItem: [] },
        SingleCart: []
      };
    default:
      return state;
  }
}
export default CartReducer;
