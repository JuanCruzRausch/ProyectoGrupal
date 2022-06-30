import React from 'react';
import {
  SingleProduct_container,
  SingleProduct_text,
  ProductFav,
  SingleProduct_buttons,
  SingleProduct_img,
} from './SingleProduct.module.css';
import imagen from '../../assets/img/heart.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function SingleProduct({ image, name, price, id, ADDtoCart }) {
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);
  function handleAddtoCart() {
    ADDtoCart(id);
    toast.success('Item Agregado Correctamente', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selector));

    //console.log(localStorage);
  }, [selector]);

  return (
    <div className={SingleProduct_container}>
      <div className={SingleProduct_img}>
        <Link to={`/${id}`}>
          <img src={image} />
        </Link>
      </div>

      <div className={SingleProduct_text}>
        <Link to={`/${id}`}>
          <h1>{name}</h1>
        </Link>
        <h2>$ {price}</h2>
      </div>
      <div className={SingleProduct_buttons}>
        <button onClick={() => handleAddtoCart(id)}>Agregar al carrito</button>
        <button className={ProductFav}>
          <img src={imagen} />
        </button>
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

export default SingleProduct;
