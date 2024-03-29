import React from 'react';
import {
  SingleProduct_container,
  SingleProduct_text,
  ProductFav,
  SingleProduct_buttons,
  SingleProduct_img,
  AddToCart
} from './SingleProduct.module.css';
import {
  SingleProduct_containerDark,
  SingleProduct_textDark,
  SingleProduct_imgDark,
  SingleProduct_buttonsDark,
  DarkFavs
} from './SingleProductDark.module.css'
import imagen from '../../assets/img/heart.png';
import carrito from '../../assets/img/addcart.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { GetSingleProduct } from '../../redux/actions/productAction';


function SingleProduct({ image, name, price, id, ADDtoCart,Shipping, ADDtoFav }) {
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const [count, setcount] = useState(1);
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);
  const FavState = useSelector(state=> state.FavReducer.Favs)
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function handleAddtoFav(){
    ADDtoFav(id)
    
    toast('🦄 Producto añadido a favoritos', {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  function handleAddtoCart() {
    
    const hasProduct = selector.find(x => x.product === id)

    if(hasProduct){
      if(hasProduct.quantity>=hasProduct.stock.stockTotal){
        toast.error('Se ha superado el limite de Stock disponible', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    else if(hasProduct.quantity>=hasProduct.stock.stockTotal === false){
       toast.warning('El item ya se encuentra en su carrito', {
         position: 'top-right',
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       })
       ADDtoCart(id,count)
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
    ADDtoCart(id,count)
  }
  
  }
  useEffect(()=> {
    localStorage.setItem('favs',JSON.stringify(FavState))
  },[FavState])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selector));
    //console.log(localStorage);
  }, [selector]);

  return (
    <div className={isdarkMode? SingleProduct_containerDark : SingleProduct_container}>
      <div className={isdarkMode ? SingleProduct_imgDark : SingleProduct_img}>
        <Link to={`/products/${id}`}>
          <img src={image?image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAyavuNov5sCvf5ryQrCGBHDVUJEz8VCMVA&usqp=CAU"} />
        </Link>
      </div>

      <div className={isdarkMode? SingleProduct_textDark :  SingleProduct_text}>
        <Link to={`/products/${id}`}>
          <h1 onClick={() => dispatch(GetSingleProduct(id))}>{name}</h1>
        </Link>
        <h2>US$ {price}</h2>
        {
          Shipping == true ? <h3>Envío Gratis</h3> : null
        }
      </div>
      <div className={isdarkMode ? SingleProduct_buttonsDark : SingleProduct_buttons}>
        <button onClick={() => handleAddtoCart(id,count)} className={AddToCart}>
          <img src={carrito} alt="addToCart"/>
        </button>
        <button onClick={() => 
            isAuthenticated ?
          handleAddtoFav(id)
          : loginWithRedirect()
          }  className={isdarkMode ? DarkFavs : ProductFav}>
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
