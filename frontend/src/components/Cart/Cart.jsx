import React from 'react'
import {CartContainer,CartDiv} from './Cart.module.css'
import EmptyCart from '../../assets/img/emptycart.svg'
import { Nav } from 'react-bootstrap'
function Cart() {
  return (
    <div className={CartContainer}>
        <div className={CartDiv}>
        <h1>
            Tu carrito de compras
        </h1>
        <hr/>
            <div>
                <img src={EmptyCart}  alt="emptyCart"/>
                <h1>Tu carrito está vacío!</h1>
                <Nav.Link>
                   <h2>Regresar a la tienda</h2>
                </Nav.Link>
            </div>
        </div>
    </div>

  )
}

export default Cart