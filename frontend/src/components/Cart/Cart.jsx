import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearFromCart, DeleteFromCart, IncreaseCart, DecreaseCart } from '../../redux/actions/CartActions';
import { CartDiv,ItemsContainer,ItemsContainer_SingleItem,ItemsInCart,Cart_Checkout,Checkout_total, EmptyCartContainer,Buttons,EliminarItem} from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../../assets/img/emptycart.png';
import {ToastContainer, toast} from 'react-toastify'

function Cart() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer.cart.cartItem);

  JSON.parse(localStorage.getItem('cart'));

  function handleClear() {
    dispatch(ClearFromCart());
    toast.info('Carrito vacío', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
      setTimeout(()=>{
           navigate(-1);
      },1300)
  }
  function handleDelete(e){
    dispatch(DeleteFromCart(e))
    toast.error('Item borrado de su carrito', {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const PrecioTotal = JSON.stringify(state.reduce((prev, next)=> prev + next.price*next.quantity, 0))
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
                  <h2>Total: ${Math.round(e.price*e.quantity)}</h2>
                  <div className={Buttons}>
                    <button onClick={() =>{
                      if(e.quantity>1){
                        dispatch(DecreaseCart(e.product))
                      }
                      else 
                       handleDelete(e.product)}
                       }>-</button>
                    <h1>{e.quantity}</h1>
                    <button onClick={() => {
                      if(e.stock > e.quantity){
                        dispatch(IncreaseCart(e.product))
                      }
                      else {
                       return
                      }}
                      }>+</button>
                  </div>
                  <button className={EliminarItem} onClick={() => 
                    handleDelete(e.product)}>
                    Eliminar
                  </button>
                </div>
              ))}
              </div>
              <div className={Cart_Checkout}>
                <div className={Checkout_total}>
                <h1>Total: $ {Math.ceil(PrecioTotal)}</h1>
              </div>
              <button onClick={()=>navigate('/shipping')}>Checkout</button>
              <button onClick={() => handleClear()}>Borrar carrito</button>
             </div> 
            </div>
          ) : (
            <div className={EmptyCartContainer}>
              <img src={EmptyCart} alt="emptyCart" />
              <h1>Tu carrito está vacío!</h1>
              <a onClick={()=> navigate("/")}>
                <h2>Regresar a la tienda</h2>
              </a>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default Cart;
