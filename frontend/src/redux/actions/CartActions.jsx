import axios from 'axios'

export const ADD_TO_CART = "ADD_TO_CART"
export const ORDER_PRODUCT = "ORDER_PRODUCT"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const SAVE_SHIPPING_ADDRESS = "SAVE_SHIPPING_ADDRESS"


export function AddToCart(id,count){
    return async(dispatch) => {
            axios(`/publicationtest/`+id)
            .then(res=>
                  dispatch({
                  type: ADD_TO_CART, 
                  payload: {
                   product:  res.data.data.publi._id,
                   title:     res.data.data.publi.title,
                   thumbnail:    res.data.data.publi.pictures[0],
                   price:    res.data.data.publi.price,
                   stock: res.data.data.publi.stock,
                   quantity: count,
                  }
              })
        )
    }         
}

export function OrderSingleProduct(id,count){
    console.log(id,count);
    return async(dispatch) => {
            axios(`/publicationtest/` + id)
            .then(res=> 
                 dispatch({
                 type: ORDER_PRODUCT, 
                 payload: {
                  product:  res.data.data.publi._id,
                  title:     res.data.data.publi.title,
                  thumbnail:    res.data.data.publi.pictures[0],
                  price:    res.data.data.publi.price,
                  stock: res.data.data.publi.stock,
                  quantity: count,
                 }
             })
        )
    }         
}

export async function sendOrder (id,data){
    let urls = ''
    await axios.post(`/payment/create-order/`+id,data)
    .then(res =>  urls = res.data)
}
export function IncreaseCart(id){
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
    
    return{
        type: DECREASE,
        payload: id
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

