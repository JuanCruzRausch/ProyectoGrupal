import axios from 'axios'

export const ADD_TO_FAV = "ADD_TO_FAV"
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"

export function AddToFav(id){
    console.log(id);
    return async(dispatch) => {
            axios(`${url}/publicationtest/` + id)
            .then(res=> 
                 dispatch({
                 type: ADD_TO_FAV, 
                 payload: {
                  product:  res.data.data.publi._id,
                  title:     res.data.data.publi.title,
                  thumbnail:    res.data.data.publi.pictures[0],
                  price:    res.data.data.publi.price,
                  freeShipping: res.data.data.publi.shipping.freeShipping,
                  condition: res.data.data.publi.condition,
                  province: res.data.data.publi.location
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
