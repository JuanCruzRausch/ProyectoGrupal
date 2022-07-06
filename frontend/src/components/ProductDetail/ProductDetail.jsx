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
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

function ProductDetail(props) {
  const dispatch = useDispatch()
  const [count, setcount] = useState(1);
  const params = useParams();
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);
  const State = useSelector((state) => state.productReducer.Allproduct);
  const navigate = useNavigate();
  console.log(params)
  const RES = State?.find((e) => e._id === params._id);
  console.log(RES)
  const [imgs, setimgs] = useState(RES?.image);

  const atras = () => {
    navigate(-1);
    props.scrollTo();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selector));
    //console.log(localStorage);
  }, [selector]);

  function ADDtoCart(){
    const hasProduct = selector.find(x => x.product === RES?._id)
    if(hasProduct){
      if(hasProduct.quantity>=hasProduct.stock || hasProduct.stock - hasProduct.quantity - count < 0){
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
    else if(hasProduct.quantity>=hasProduct.stock === false){
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
    dispatch(AddToCart(RES?._id, count))}
  }
  function handleSetOrder(){
    dispatch(OrderSingleProduct(RES?._id, count))
    navigate('/shipping')
  }
  
  const handleSelect = (index) => {
    setimgs(RES?.pictures[index]);
  };



  return (
    <div className={Detail_container}>
      <div className={Detail_Links}>
        <div onClick={() => atras()}>
          <img src={arrow} alt="back" />
          <button>Atras</button>
        </div>
        <h2>{RES?.category.name}</h2>
      </div>
      <div className={Detail_Item}>
        <div className={Detail_Item_image}>
          <div className={Detail_Item_pictures}>
            {RES?.pictures
              ?.filter((e, i) => i <= 5)
              .map((e, i) => (
                <img key={i} onClick={() => handleSelect(i)} src={e} />
              ))}
          </div>
          <img className={SelectedImg} src={imgs} alt={RES?.title} />
        </div>
        <div className={Detail_Item_text}>
          <h1>{RES?.title}</h1>

          {RES?.stock ? <h2 className={Item_text_stock}>En stock</h2> : null}

          <h2>
            <img src={gps} />
            <span>Ubicación</span> <br />
            {RES?.province}
          </h2>

          {RES?.shipping.shippinType === "free" ? (
            <h2 className={EnvioGratis}>Envio gratis</h2>
          ) : null}

          <h2>
            <span>Condición:</span> <br />
            {RES?.condition === 'new' ? 'Nuevo' : 'Usado'}
          </h2>
        </div>
      </div>
      {/* este codigo es nuevo, arreglale el CSS     */}
      <div >
        <form className={Detail_Description}>
            {RES?.stock?.options?.map(option=>{
              console.log(option)
          return(
            <div>
               <input type="radio" name="combination" value={option._id}/>
              {option?.combination?.map(combi=>{
                return(
                  <div >
                    <span key={combi._id}>
                     
                      <label htmlFor="">{combi.name}</label>
                      <label htmlFor="">{combi.value}</label>
                     
                    </span>

                  </div>
                )
              })}
                                  <div>
                                  <label htmlFor="">stock:</label>
                    <label htmlFor="">{option.stock}</label>
                    </div>
            </div>
          )
        })}
        </form>
            </div>
      <div className={Detail_CountPrice}>
        <h1>${RES?.price}</h1>
        <Count
          onAdd={setcount}
          count={count}
          stockTotal={RES?.stock?.stockTotal}
          price={RES?.finalPrice}
        />


        <button onClick={()=> handleSetOrder()} className={ButtonCompra}>Comprar</button>
        <img className={CountPrice_AddCart} onClick={() => ADDtoCart()} src={cart} alt="agregar"/>
      </div>

           

      <div className={Detail_Description}>
        <div className={Detail_Description_Detail}>
          {RES?.seller ? (
            <div className={userData}>
              <img src={user} />
              <h1>{RES?.seller.name}</h1>
              <h2>{RES?.seller.reputation?.status}</h2>
            </div>
          ) : null}
          <hr />
          <h2>Descripción</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet
            culpa debitis iste beatae voluptatibus non ullam provident, quisquam
            minus, veritatis enim deserunt ipsam eius reprehenderit ut, at
            necessitatibus. Quae! Recusandae suscipit culpa fuga beatae
            adipisci. Mollitia, ex eveniet debitis exercitationem tempore illum
            amet incidunt libero perferendis reprehenderit laudantium iure quas
            praesentium molestias quaerat dolor repellat neque corporis labore
            consequatur.
            <br />
            Nemo voluptatum iusto tempore voluptates impedit numquam quod
            temporibus nam velit facere repellat maiores ea laudantium, iste
            alias voluptas unde quasi perspiciatis assumenda dolorum, dicta
            molestias neque doloremque! Corrupti, doloremque?
            <br />
            Nihil doloribus autem tempore amet sequi reiciendis perferendis,
            natus maiores minima veniam cupiditate nostrum dicta cum, eligendi
            saepe in optio placeat? Perspiciatis enim impedit ex soluta et ea
            pariatur reiciendis!
          </p>
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
