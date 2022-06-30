import axios from 'axios'
export const ADD_TO_FAV = "ADD_TO_FAV"
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"

export function AddToFav(id){
    console.log(id);
    return async(dispatch) => {
            axios("http://localhost:5050/publication/" + id)
            .then(res=> 
                 dispatch({
                 type: ADD_TO_FAV, 
                 payload: {
                  product:  res.data.data._id,
                  title:     res.data.data.title,
                  thumbnail:    res.data.data.thumbnail,
                  price:    res.data.data.price,
                  freeShipping: res.data.data.freeShipping,
                  condition: res.data.data.condition,
                  province: res.data.data.province
                 }
             })
        )
    }         
}

export function DeleteFromFav(id){
    console.log(id);
    return  {
            type:REMOVE_FROM_FAV,
            payload:id
 }   
}
