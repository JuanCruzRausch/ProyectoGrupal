import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions';
import Count from '../Count/Count';
import {Detail_container, Detail_Links, Detail_Item,Detail_CountPrice,Detail_Item_image, Detail_Item_text,Item_text_stock, CountPrice_AddCart,EnvioGratis,Detail_Description,ButtonCompra, Detail_Description_Detail, Detail_Description_payment} from './ProductDetail.module.css'
import cart from '../../assets/img/cart.png'
import gps from '../../assets/img/gps.png'

function ProductDetail() {
    const [count, setcount] = useState(0)
    const params = useParams()
    const dispatch = useDispatch();
    const State = useSelector(state => state.Allproduct)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    const RES = State?.filter(e => e.id === (params.id))
  return (
    <div className={Detail_container}>
        <div className={Detail_Links}>
            <Link to="/">
                <button>
                    Back 
                </button>
            </Link>
            <h2>{RES[0].category}</h2>
        </div>
        <div className={Detail_Item}>
            <div className={Detail_Item_image}>
            <img src={RES[0].image} alt={RES[0].title}/>
            </div>
            <div className={Detail_Item_text}>
                <h1>{RES[0].title}</h1>
                {RES[0].stock ? <h2 className={Item_text_stock}>En stock</h2> : null}
                <h2><img src={gps} /><span>Ubicación</span> <br />{RES[0].province}</h2>
                {RES[0].freeShipping === true ? <h2 className={EnvioGratis}>envio gratis</h2> : null}
                <h2><span>condición:</span> <br/>{RES[0].condition === "new" ? "nuevo" : "usado"}</h2>
            </div>
        </div>
        <div className={Detail_CountPrice}>
            <Count onAdd={setcount} count={count} stock={RES[0].stock} price={RES[0].price} />
            <h1>${RES[0].price}</h1>
            <button className={ButtonCompra}>Comprar</button>
            <button className={CountPrice_AddCart}><img src={cart}/></button>
        </div>
        <div className={Detail_Description}>
        <div className={Detail_Description_Detail}>
        {RES[0].seller? <div><h1>{RES[0].seller.name}</h1> <h2>{RES[0].seller.reputation?.status}</h2></div>: null }
        </div>
        <div className={Detail_Description_payment}>
            <h1>Medios de pago</h1>
        </div>
        </div>
        <div>
            <h1>
                preguntas y respuestas
            </h1>
        </div>

    </div>
  )
}

export default  ProductDetail