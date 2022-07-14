import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearFromCart, DeleteFromCart, IncreaseCart, DecreaseCart, AddToCart } from '../../redux/actions/CartActions';
import { CartDiv,ItemsContainer,ItemsContainer_SingleItem,ItemsInCart,Cart_Checkout,Checkout_total, EmptyCartContainer,Buttons,EliminarItem, FavDiv, AddCartFav, container} from './Cart.module.css';
import { Link, useNavigate } from 'react-router-dom';
import EmptyCart from '../../assets/img/emptycart.png';
import {ToastContainer, toast} from 'react-toastify'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Cart() {
  const [count,setcount] = useState(1)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer.cart.cartItem);
  const FavState = useSelector((state)=> state.FavReducer.Favs)
  const userState = useSelector((state) => state.userReducer.user)
  const {isAuthenticated} = useAuth0();
  JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

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

  function handleAddtoCart(e){
    const hasProduct = state.find(x => x.product === state?._id)
    if(hasProduct){
      if(hasProduct.quantity>=hasProduct?.stock.stockTotal || hasProduct.stock.stockTotal - hasProduct.quantity - count < 0){
        toast.error('Se ha superado el limite de Stock disponible', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      return
    }
    else if(hasProduct.quantity>=hasProduct?.stock.stockTotal === false){
       toast.warning(`Ya se encuentra en su carrito, se agrego la cantidad seleccionada: ${count}`, {
         position: 'top-right',
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       })
       dispatch(AddToCart(id, count))
     }
  }
  else {
    toast.success('Item Agregado Correctamente', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(AddToCart(e.product, count))}
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

    if(state.length === 1 || state.length === 0){
      toast.info('Carrito vacío', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
  }
  console.log(userState?.email_verified === true)
  const PrecioTotal = JSON.stringify(state.reduce((prev, next)=> prev + next.price*next.quantity, 0))
  return (
    <div className={container}>
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
                  <h2>Total: US$ {Math.round(e.price*e.quantity)}</h2>
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
                      if(e.stock.stockTotal > e.quantity){
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
                <h1>Total:US$ {Math.ceil(PrecioTotal)}</h1>
              </div>
              {
                userState?.email_verified === true ?
                null
                :
                <p>Para completar la compra verifica tu correo o inicia sesion</p>
              }
              {
                 userState?.email_verified === true ? 
                 <button onClick={()=>navigate('/shipping')}>Checkout</button>
                :
                <Button variant="secondary" disabled>Checkout</Button>
              }
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
      {
        FavState.length>0 && isAuthenticated ? 
        <div className={FavDiv}>
          <h1>productos que te han interesado</h1>
          <div className={ItemsContainer}>
            <div className={ItemsInCart}>
                {
                FavState.map((e,i) => 
              
                <div className={ItemsContainer_SingleItem}  key={i}>
                    <img src ={e.thumbnail}/>
                    <Link to={`/products/${e.product}`}>
                        {e.title}
                    </Link>
                    <h2>US$ {e.price}</h2>
                    <h2>{e.province}</h2>
                    {
                    e.freeShipping == true ? <h2 className={Gratis}>Envio Gratuito</h2> : null
                    }
                    {
                    e.condition == "new" ? <h2>Nuevo</h2> : <h2>Usado</h2>
                    }
                    <button className={AddCartFav} onClick={() => handleAddtoCart(e)}>
                    Agregar al carrito
                  </button>
                </div>) 
                }
              </div>
           </div> 
        </div>
        : 
        null
      }
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
