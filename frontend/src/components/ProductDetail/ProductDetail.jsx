import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions';
import Count from '../Count/Count';
import mercadopago from '../../assets/img/cards/mercadopago.svg'
import naranja from '../../assets/img/cards/naranja.svg'
import visa from '../../assets/img/cards/visa.svg'
import americanexpress from '../../assets/img/cards/americanexpress.svg'
import pagofacil from '../../assets/img/cards/pagofacil.svg'
import rapipago from '../../assets/img/cards/rapipago.svg'
import visadebito from '../../assets/img/cards/visadebito.svg'
import cart from '../../assets/img/cart.png'
import gps from '../../assets/img/gps.png'
import user from '../../assets/img/user.png'
import arrow from '../../assets/img/leftarrow.png'
import {Detail_container, Detail_Links, Detail_Item,Detail_CountPrice,Detail_Item_image, Detail_Item_text,Item_text_stock, CountPrice_AddCart,EnvioGratis,Detail_Description,ButtonCompra, Detail_Description_Detail, Detail_Description_payment,userData,Payment_methods, PyR_container,PyR_content, PyR_content_Pregunta, PyR_content_Respuesta, Detail_Item_pictures,SelectedImg} from './ProductDetail.module.css'
import { scrollToProducts } from '../variablesGlobales';

function ProductDetail(props) {
    const [count, setcount] = useState(0)
    const params = useParams()
    const State = useSelector(state => state.Allproduct)
    const navigate = useNavigate()
    
    const atras = () =>{
        navigate(-1)
        props.scrollTo()
    }

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const RES = State?.filter(e => e._id === (params._id))

    const [imgs, setimgs] = useState(RES[0]?.image)

    const handleSelect = (index) =>{
      setimgs(RES[0]?.pictures[index])
  }
    
  return (
    <div className={Detail_container}>
        <div className={Detail_Links}>
            <div onClick={()=> atras()}>
                <img src={arrow} alt="back" />
                <button>
                    Atras
                </button>
            </div>
            <h2>{RES[0]?.category.name}</h2>
        </div>
        <div className={Detail_Item}>
            <div className={Detail_Item_image}>
                <div className={Detail_Item_pictures}>
                {
                    RES[0]?.pictures?.filter((e,i)=>i<=5).map((e,i)=> <img key={i} onClick={()=> handleSelect(i)} src={e} />)
                }
                </div>
            <img className={SelectedImg} src={imgs} alt={RES[0]?.title}/>
            </div>
            <div className={Detail_Item_text}>
                <h1>{RES[0]?.title}</h1>

                {RES[0]?.stock ? 
                <h2 className={Item_text_stock}>En stock</h2> : null}

                <h2><img src={gps} /><span>Ubicación</span> <br />
                {RES[0]?.province}</h2>

                {RES[0]?.freeShipping === true ?
                 <h2 className={EnvioGratis}>envio gratis</h2> : null}

                <h2><span>condición:</span> <br/>
                {RES[0]?.condition === "new" ? "nuevo" : "usado"}</h2>

            </div>
        </div>
        <div className={Detail_CountPrice}>
            <h1>${RES[0]?.price}</h1>
            <Count onAdd={setcount} count={count} stock={RES[0]?.stock} price={RES[0]?.price} />
            <button className={ButtonCompra}>Comprar</button>
            <button className={CountPrice_AddCart}><img src={cart}/></button>
        </div>
        <div className={Detail_Description}>
        <div className={Detail_Description_Detail}>
        {RES[0]?.seller? 
        <div className={userData}>
            <img src={user}/>
            <h1>{RES[0]?.seller.name}</h1>
            <h2>{RES[0]?.seller.reputation?.status}
            </h2>
        </div> : null }
        <hr/>
        <h2>
            Descripción
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet culpa debitis iste beatae voluptatibus non ullam provident, quisquam minus, veritatis enim deserunt ipsam eius reprehenderit ut, at necessitatibus. Quae!
            Recusandae suscipit culpa fuga beatae adipisci. Mollitia, ex eveniet debitis exercitationem tempore illum amet incidunt libero perferendis reprehenderit laudantium iure quas praesentium molestias quaerat dolor repellat neque corporis labore consequatur.
            <br />
            Nemo voluptatum iusto tempore voluptates impedit numquam quod temporibus nam velit facere repellat maiores ea laudantium, iste alias voluptas unde quasi perspiciatis assumenda dolorum, dicta molestias neque doloremque! Corrupti, doloremque?
            <br />
            Nihil doloribus autem tempore amet sequi reiciendis perferendis, natus maiores minima veniam cupiditate nostrum dicta cum, eligendi saepe in optio placeat? Perspiciatis enim impedit ex soluta et ea pariatur reiciendis!
        </p>
        </div>
        <div className={Detail_Description_payment}>
            <h2>Medios de pago</h2>
            <hr />
            <div className={Payment_methods}>
                <div>
                    Paga con MercadoPago
                    <div>
                    <img src={mercadopago} alt="MercadoPago"/>
                    </div>
                </div>
                <div>
                    Tarjetas de crédito
                <div>
                    <img src={naranja} alt="naranja" />
                    <img src={americanexpress} alt="american-express" />
                    <img src={visa} alt="visa" />
                </div>
                </div>
                <div>
                    Tarjetas de débito
                    <div>
                        <img src={visadebito} alt="visaDebito" />
                    </div>
                </div>
                <div>
                    Efectivo
                    <div>
                        <img src={rapipago} alt="rapipago" />
                        <img src={pagofacil} alt="pagofacil" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className={PyR_container}>
            <h1>
                preguntas y respuestas
            </h1>
            <hr/>
            <div className={PyR_content}>
                <h3 className={PyR_content_Pregunta}>Lorem ipsum?</h3>
                <h3 className={PyR_content_Respuesta}>Lorem ipsum</h3>
            </div>
            <div className={PyR_content}>
                <h3 className={PyR_content_Pregunta}>Lorem ipsum?</h3>
                <h3 className={PyR_content_Respuesta}>Lorem ipsum</h3>
            </div>
            <div className={PyR_content}>
                <h3 className={PyR_content_Pregunta}>Lorem ipsum?</h3>
                <h3 className={PyR_content_Respuesta}>Lorem ipsum</h3>
            </div>
            <div className={PyR_content}>
                <h3 className={PyR_content_Pregunta}>Lorem ipsum?</h3>
                <h3 className={PyR_content_Respuesta}>Lorem ipsum</h3>
            </div>
        </div>
    </div>
  )
}

export default  ProductDetail