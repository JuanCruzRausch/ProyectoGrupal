import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ClearFromCart, DeleteFromCart } from '../../redux/actions/CartActions';
import {CartContainer,CartDiv} from './Cart.module.css'
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../../assets/img/emptycart.svg'
function Cart() {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer.cart)

   JSON.parse(localStorage.getItem(("cart")))

  function handleClear(){
    dispatch(ClearFromCart())
    navigate("/")
  }
  return (
    <div className={CartContainer}>
        <div className={CartDiv}>
        <h1>
            Tu carrito de compras
        </h1>
        <hr/>
            <div>
                {/* <img src={EmptyCart}  alt="emptyCart"/>
                <h1>Tu carrito está vacío!</h1>
                <Nav.Link href="/">
                   <h2>Regresar a la tienda</h2>
                </Nav.Link> */}
              <h3>Productos</h3>
                {
                  state.length > 0 ? 
                  <div>
                 {  state.map((e,i) =>
                  <div key={i}>
                    <h1>{e.title}</h1>
                    <h2>{e.price}</h2>
                    <button onClick={()=> dispatch(DeleteFromCart(e._id))}>
                      borrar elemento
                    </button>
                  </div> ) }
                    <button onClick={() =>handleClear()}>Borrar</button>
                  </div>
                : 
                  <div>
                    <img src={EmptyCart}  alt="emptyCart"/>
                <h1>Tu carrito está vacío!</h1>
                <a href="/">
                   <h2>Regresar a la tienda</h2>
                </a>
                  </div>
                }
                
            </div>
        </div>
    </div>

  )
}

export default Cart