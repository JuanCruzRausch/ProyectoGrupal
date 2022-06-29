import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GET_PRODUCTS,
} from '../actions/CartActions';

const CartInitialState = {
  products: [],
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
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      const item = payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: [...state.cart.cartItem, { ...item, quantity: 1 }],
        },
      };
    case REMOVE_FROM_CART:
      const carrito = state.cart.cartItem;
      const filtro = carrito.filter((item) => item._id !== payload);
      localStorage.setItem('cart', JSON.stringify(filtro));
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
