import React from 'react'
import { useSelector } from 'react-redux'
import {FavContainer, FavDiv} from './Favoritos.module.css'
function Favoritos() {
    JSON.parse(localStorage.getItem('favs'));
    const FavState = useSelector(state=> state.FavReducer.Favs)
  return (
    <div className={FavContainer}>
        <div className={FavDiv}>
           <h1> Favoritos</h1>
           <hr />
           <div>
                {
                FavState.map((e) => 
                <div>
                    <h1>{e.title}</h1>
                    <h2>{e.price}</h2>
                    <h2>{e.province}</h2>
                    {
                    e.freeShipping == true ? <h2>Envio Gratuito</h2> : null
                    }
                    {
                    e.condition == "new" ? <h2>Nuevo</h2> : <h2>Usado</h2>
                    }
                    <img src ={e.thumbnail} alt={e.title}/>
                </div>) 
                }
           </div>
        </div>
    </div>
  )
}

export default Favoritos