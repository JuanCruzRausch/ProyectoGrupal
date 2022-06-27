import React from 'react'
import {SingleProduct_container, SingleProduct_text,ProductFav,SingleProduct_buttons,SingleProduct_img} from './SingleProduct.module.css'
import imagen from '../../assets/img/heart.png'
import { Link } from 'react-router-dom';
function SingleProduct({image, name, price, id}) {
  return (
    <div className={SingleProduct_container}>
        <div className={SingleProduct_img}>
            <Link to={`/${id}`}>
                <img src={image}/>
            </Link> 
        </div>
        
        <div className={SingleProduct_text}>
           <Link to={`/${id}`}>
                <h1>
                    {name}
                </h1>
           </Link> 
            <h2>
                $ {price}
            </h2>
        </div>
        <div className={SingleProduct_buttons}>
            <button>
            Agregar al carrito
            </button>
            <button className={ProductFav}>
                <img src={imagen} /> 
            </button>
        </div>
    </div>
  )
}

export default SingleProduct;