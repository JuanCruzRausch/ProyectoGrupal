import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearFromCart, DeleteFromCart } from '../../redux/actions/CartActions';
import { CartDiv,ItemsContainer,ItemsContainer_SingleItem,ItemsInCart,Cart_Checkout,Checkout_total} from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../../assets/img/emptycart.svg';
function Cart() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer.cart.cartItem);

  JSON.parse(localStorage.getItem('cart'));

  function handleClear() {
    dispatch(ClearFromCart());
    navigate('/');
  }
  const PrecioTotal = JSON.stringify(state.reduce((prev, next)=> prev + next.price, 0))

  return (
    <div>
      <div className={CartDiv}>
        <h1>Tu carrito de compras</h1>
        <hr />
        <div>
          {state.length > 0 ? (
            <div className={ItemsContainer}>
              <div className={ItemsInCart}>
              <h3>Productos</h3>
              {state.map((e, i) => (
                <div className={ItemsContainer_SingleItem} key={i}>
                  <img src={e.thumbnail}/>
                  <h1>{e.title}</h1>
                  <h2>${e.price}</h2>
                  <h2>{e.quantity}</h2>
                  <button onClick={() => dispatch(DeleteFromCart(e._id))}>
                    x
                  </button>
                </div>
              ))}
              </div>
              <div className={Cart_Checkout}>
                <div className={Checkout_total}>
                <h1>Total: $ {Math.ceil(PrecioTotal)}</h1>
              </div>
              <button>Checkout</button>
              <button onClick={() => handleClear()}>Borrar carrito</button>
             </div> 
            </div>
          ) : (
            <div>
              <img src={EmptyCart} alt="emptyCart" />
              <h1>Tu carrito está vacío!</h1>
              <a href="/">
                <h2>Regresar a la tienda</h2>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
