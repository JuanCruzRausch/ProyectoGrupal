import React from 'react'
import {SingleProduct_container, SingleProduct_text,ProductFav,SingleProduct_buttons} from './SingleProduct.module.css'
import imagen from '../../assets/img/heart.png'
function SingleProduct({image, name, price}) {
  return (
    <div className={SingleProduct_container}>
        <div>
            <img src={image}/>
        </div>
        <div className={SingleProduct_text}>
            <h1>
                {name}
            </h1>
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