import axios from 'axios'
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const SAVE_SHIPPING_ADDRESS = "SAVE_SHIPPING_ADDRESS"
export function AddToCart(id){
    return async(dispatch) => {
            axios("http://localhost:5050/publication/" + id)
            .then(res=> 
                 dispatch({
                 type: ADD_TO_CART, 
                 payload: {
                  product:  res.data.data._id,
                  title:     res.data.data.title,
                  thumbnail:    res.data.data.thumbnail,
                  price:    res.data.data.price,
                  quantity: 1,
                 }
             })
        )
    }         
}
export function sendOrder (){
   
  return {type:CLEAR_CART}
      
}
export function IncreaseCart(id){
    console.log(id);
    return{
        type: INCREASE,
        payload: id
    }
}
export function saveShippingAddress(data){
    return{
        type: SAVE_SHIPPING_ADDRESS,
        payload: {...data}
    }
}
export function DecreaseCart(id){
    console.log(id);
    return{
        type: DECREASE,
        payload: id
    }
}
export function DeleteFromCart(id){
    console.log(id);
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
