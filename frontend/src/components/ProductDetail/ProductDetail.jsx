import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Count from '../Count/Count';
import mercadopago from '../../assets/img/cards/mercadopago.svg';
import naranja from '../../assets/img/cards/naranja.svg';
import visa from '../../assets/img/cards/visa.svg';
import americanexpress from '../../assets/img/cards/americanexpress.svg';
import pagofacil from '../../assets/img/cards/pagofacil.svg';
import rapipago from '../../assets/img/cards/rapipago.svg';
import visadebito from '../../assets/img/cards/visadebito.svg';
import cart from '../../assets/img/addcart.png';
import gps from '../../assets/img/gps.png';
import user from '../../assets/img/user.png';
import arrow from '../../assets/img/leftarrow.png';
import { ToastContainer, toast } from 'react-toastify';
import {
  Detail_container,
  Detail_Links,
  Detail_Item,
  Detail_CountPrice,
  Detail_Item_image,
  Detail_Item_text,
  Item_text_stock,
  CountPrice_AddCart,
  EnvioGratis,
  Detail_Description,
  ButtonCompra,
  Detail_Description_Detail,
  Detail_Description_payment,
  userData,
  Payment_methods,
  PyR_container,
  PyR_content,
  PyR_content_Pregunta,
  PyR_content_Respuesta,
  Detail_Item_pictures,
  SelectedImg,
} from './ProductDetail.module.css';
import { AddToCart, OrderSingleProduct } from '../../redux/actions/CartActions';
import { GetSingleProduct } from '../../redux/actions';

function ProductDetail(props) {
  const dispatch = useDispatch()
  const [count, setcount] = useState(1);
  const params = useParams();
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);
  const State = useSelector((state) => state.productReducer.SingleItem);
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(GetSingleProduct(!State.length ? params._id : State.length))
  },[])
  const [imgs, setimgs] = useState(State?.image);

  const atras = () => {
    navigate(-1);
    props.scrollTo();
  };
  console.log(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selector));
    //console.log(localStorage);
  }, [selector]);

  function ADDtoCart(){
    const hasProduct = selector.find(x => x.product === State?._id)
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
       dispatch(AddToCart(RES?._id, count))
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
    dispatch(AddToCart(State?._id, count))}
  }
  function handleSetOrder(){
    dispatch(OrderSingleProduct(State?._id, count))
    navigate('/shipping')
  }
  
  const handleSelect = (index) => {
    setimgs(State?.pictures[index]);
  };



  return (
    <div className={Detail_container}>
      <div className={Detail_Links}>
        <div onClick={() => atras()}>
          <img src={arrow} alt="back" />
          <button>Atras</button>
        </div>
      <h2>{State?.category?.name} / {State?.subCategory?.name}</h2>
      </div>
      <div className={Detail_Item}>
        <div className={Detail_Item_image}>
          <div className={Detail_Item_pictures}>
            {State?.pictures
              ?.filter((e, i) => i <= 5)
              .map((e, i) => (
                <img key={i} onClick={() => handleSelect(i)} src={e} />
              ))}
          </div>
          <img className={SelectedImg} src={imgs} alt={State?.title} />
        </div>
        <div className={Detail_Item_text}>
          <h1>{State?.title}</h1>

          {State?.stock?.stockTotal ? <h2 className={Item_text_stock}>En stock</h2> : null}

          <h2>
            <img src={gps} />
            <span>Ubicación</span> <br />
            {State?.location}
          </h2>

          {State?.shipping?.shippingType === "free" ? (
            <h2 className={EnvioGratis}>Envio gratis</h2>
          ) : null}

          <h2>
            <span>Condición:</span> <br />
            {State?.condition === 'new' ? 'Nuevo' : 'Usado'}
          </h2>
        </div>
      </div>
      <div >
        <form className={Detail_Description}>
            {State?.stock?.options?.map(option=>{
          return(
            <div>
               <input type="radio" name="combination" value={option._id}/>
              {option?.combination?.map(combi=>{
                return(
                  <div >
                    <span key={combi._id}>
                      <label htmlFor="">{combi.name}:</label>
                      <br />
                      <label htmlFor="">{combi.value}</label>
                    </span>
                  </div>)})}  
            </div>
          )
        })}
        </form>
            </div>
      <div className={Detail_CountPrice}>
        <h1>${State?.price}</h1>
        <Count
          onAdd={setcount}
          count={count}
          stockTotal={State?.stock?.stockTotal}
        />
        <button onClick={()=> handleSetOrder()} className={ButtonCompra}>Comprar</button>
        <img className={CountPrice_AddCart} onClick={() => ADDtoCart()} src={cart} alt="agregar"/>
      </div>

           

      <div className={Detail_Description}>
        <div className={Detail_Description_Detail}>
          {State?.seller ? (
            <div className={userData}>
              <img src={user} />
              <h1>{State?.seller.name}</h1>
              <h2>{State?.seller.reputation?.status}</h2>
            </div>
          ) : null}
          <hr />
          <h2>Descripción</h2>
          <p>{State?.description}</p>
        </div>
        <div className={Detail_Description_payment}>
          <h2>Medios de pago</h2>
          <hr />
          <div className={Payment_methods}>
            <div>
              Paga con MercadoPago
              <div>
                <img src={mercadopago} alt="MercadoPago" />
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
        <h1>preguntas y respuestas</h1>
        <hr />
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

export default ProductDetail;
