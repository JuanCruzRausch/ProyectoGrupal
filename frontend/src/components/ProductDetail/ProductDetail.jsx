import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions';
import Count from '../Count/Count';

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
    <div>
        <div>
            <Link to="/">
                <button>
                    Back 
                </button>
            </Link>
            <h2>{RES[0].category}</h2>
        </div>
        <div>
            <div>
            <img src={RES[0].image} alt={RES[0].title}/>
            </div>
            <div>
                <h1>{RES[0].title}</h1>
                {RES[0].stock ? <h2>En stock</h2> : null}
                <h2>{RES[0].province}</h2>
                {RES[0].freeShipping === true ? <h2>envio gratis</h2> : null}
                <h2>{RES[0].condition}</h2>
            </div>
        </div>
        <div>
            <Count onAdd={setcount} count={count} stock={RES[0].stock} price={RES[0].price} />
            <h1>{RES[0].price}</h1>
            <button>Comprar</button>
            <button><img/></button>
        </div>
        <div>
        {RES[0].seller? <div><h1>{RES[0].seller.name}</h1> <h2>{RES[0].seller.reputation?.status}</h2></div>: null }
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