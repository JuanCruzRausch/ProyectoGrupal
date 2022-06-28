import axios from 'axios'
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
export const GET_PRODUCTS = "GET_PRODUCTS"

export function getProductsCart() {
    return async (dispatch) => {
      return axios("http://localhost:5050/publication?page=" + 1 + "&&limit=640")
       .then(res => dispatch({type:GET_PRODUCTS, payload: res.data.data.publications}),
      )
    }
  }

export function AddToCart(id){
    return async(dispatch) => {
            axios("http://localhost:5050/publication/" + id)
            .then(res=> 
                 dispatch({
                 type: ADD_TO_CART, 
                 payload: res.data.data
         })
    )
} 
        
}
export function DeleteFromCart(id){
    return  {
            type:REMOVE_FROM_CART,
            payload:id
 }   
}

export function ClearFromCart(){
    return{
        type: CLEAR_CART
    }
}
