import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Count from '../Count/Count';
import paypal from '../../assets/img/paypal.jpg';
import cart from '../../assets/img/addcart.png';
import gps from '../../assets/img/gps.png';
import user from '../../assets/img/user.png';
import arrow from '../../assets/img/leftarrow.png';
import { ToastContainer, toast } from 'react-toastify';
import Chat from '../Chat/Chat';
import io from 'socket.io-client';
import {
  Modals,
  Detail_container,
  Detail_Links,
  Detail_Item,
  Detail_CountPrice,
  Detail_Item_image,
  Detail_Item_text,
  Item_text_stock,
  Item_text_stockOut,
  CountPrice_AddCart,
  EnvioGratis,
  Detail_Description,
  ButtonCompra,
  Detail_Description_Detail,
  Detail_Description_payment,
  userData,
  Payment_methods,
  Detail_Item_pictures,
  SelectedImg,
  ReviewsContainerModal,
  Review,
  ReviewsContainer,
} from './ProductDetail.module.css';
import {
  ModalsDark,
  Dark_Item_text,
  Dark_Description,
  Dark_Description_Detail,
  Dark_CountPrice,
  DarkCompra,
  DarkReviewsModal,
  DarkCountPrice_AddCart,
  Dark_text_stockOut,
  DarkStock,
  DarkReviews,
  DarkReview,
  Dark_Description_payment,
} from './DarkDetails.module.css';
import { DetailDark } from '../Terms/TermsDark.module.css';
import { AddToCart, OrderSingleProduct } from '../../redux/actions/CartActions';
import { GetSingleProduct } from '../../redux/actions/productAction';
import Rating from '../Rating/Rating';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const socket = io.connect("https://ml7e.herokuapp.com/");

function ProductDetail(props) {
  const [show, setShow] = useState(false);
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  const dispatch = useDispatch();
  const [count, setcount] = useState(1);
  const params = useParams();
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);
  const State = useSelector((state) => state.productReducer.SingleItem);
  const [imgs, setimgs] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetSingleProduct(!State.length ? params._id : State.length));
    return() => {
      dispatch({ type: "SINGLE_ITEM", payload:{}})
    }
  }, []);

  useEffect(() => {
    setimgs(
      State?.pictures?.length > 0
        ? State?.pictures[0]
        : null
    );
  }, [State]);

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

  const handleSelect = (index) => {
    setimgs(State?.pictures[index]);
  };

  function ADDtoCart() {
    const hasProduct = selector.find((x) => x.product === State?._id);

    if (hasProduct) {
      if (
        hasProduct.quantity >= hasProduct?.stock.stockTotal ||
        hasProduct.stock.stockTotal - hasProduct.quantity - count < 0
      ) {
        toast.error('Se ha superado el limite de Stock disponible', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      } else if (
        hasProduct.quantity >= hasProduct?.stock.stockTotal ===
        false
      ) {
        toast.warning(
          `Ya se encuentra en su carrito, se agrego la cantidad seleccionada: ${count}`,
          {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        dispatch(AddToCart(State?._id, count));
      }
    } else {
      toast.success('Item Agregado Correctamente', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(AddToCart(State?._id, count));
    }
  }

  function handleSetOrder() {
    dispatch(OrderSingleProduct(State?._id, count));
    navigate('/shipping');
  }

  return (
    <div>
      <Helmet>
        <title> ML7E </title>
      </Helmet>
      <div className={Detail_container}>
        <div className={isdarkMode ? DetailDark : Detail_Links}>
          <div onClick={() => atras()}>
            <img src={arrow} alt="back" />
            <button>Atras</button>
          </div>
          <h2>
            {State?.category?.name} / {State?.subCategory?.name}
          </h2>
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
          <div className={isdarkMode ? Dark_Item_text : Detail_Item_text}>
            {
            State?.rating?.total_votes?.length> 0 ?
            <Rating rating={State?.rating?.average} />
            : null
            }
            <h1>{State?.title}</h1>
            {State?.stock?.stockTotal ? (
              <h2 className={isdarkMode ? DarkStock : Item_text_stock}>
                En stock
              </h2>
            ) : (
              <h2
                className={isdarkMode ? Dark_text_stockOut : Item_text_stockOut}
              >
                Sin Stock disponible
              </h2>
            )}

            <h2>
              <img src={gps} />
              <span>Ubicación</span> <br />
              {State?.location}
            </h2>

            {State?.shipping?.shippingType === 'free' ? (
              <h2 className={EnvioGratis}>Envio gratis</h2>
            ) : null}

            <h2>
              <span>Condición:</span> <br />
              {State?.condition === 'new' ? 'Nuevo' : 'Usado'}
            </h2>
          </div>
        </div>
        <div className={isdarkMode ? Dark_CountPrice : Detail_CountPrice}>
          <h1>US$ {State?.price}</h1>
          <Count
            onAdd={setcount}
            count={count}
            stockTotal={State?.stock?.stockTotal}
          />
          {State?.stock?.stockTotal > 0 ? (
            <img
              className={
                isdarkMode ? DarkCountPrice_AddCart : CountPrice_AddCart
              }
              onClick={() => ADDtoCart()}
              src={cart}
              alt="agregar"
            />
          ) : null}
        </div>

        <div className={isdarkMode ? DarkReviews : ReviewsContainer}>
          <h2>Comentarios Sobre este producto({State?.reviews?.length})</h2>
          <hr />
          <div>
            {State?.reviews?.slice(0,3).map((e, i) => (
              <div className={isdarkMode ? DarkReview : Review}>
                <h3>{e.review}</h3>
                <Rating rating={State?.rating?.total_votes[i]} />
              </div>
            ))}
                  <Button variant="primary" onClick={() => setShow(true)}>
                    Ver todas los comentarios
                  </Button>
          </div>
        </div>

        <div className={isdarkMode ? Dark_Description : Detail_Description}>
          <div
            className={
              isdarkMode ? Dark_Description_Detail : Detail_Description_Detail
            }
          >
            <h2>Descripción</h2>
            <p>{State?.description}</p>
          </div>
          <div
            className={
              isdarkMode ? Dark_Description_payment : Detail_Description_payment
            }
          >
            <h2>Medios de pago</h2>
            <hr />
            <div className={Payment_methods}>
              <div>
                Paga con paypal
                <div>
                  <img src={paypal} alt="MercadoPago" />
                </div>
              </div>
            </div>
            <hr />
            <h1>Vendido por:</h1>
            {State?.seller ? (
              <div className={userData}>
                <img src={user} />
                <h2>{State?.seller.brand}</h2>
                <h2>{State?.seller.reputation?.status}</h2>
                {State?.seller.reputation?.votes?.length > 0 ? (
                  <h2>{State?.seller.reputation?.votes}</h2>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <Chat
          socket={socket}
          _id={State?._id}
          questions={State?.questions}
          product_seller_id={State.seller?._id}
        />

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
      <Modal
        className={isdarkMode? ModalsDark : Modals}
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton closeVariant="white">
        </Modal.Header>
        <Modal.Body>
        <div className={isdarkMode ? DarkReviewsModal : ReviewsContainerModal}>
          <h2>Comentarios Sobre este producto({State?.reviews?.length})</h2>
          <hr />
            {State?.reviews?.map((e, i) => (
              <div className={isdarkMode ? DarkReview : Review}>
                <h3>{e.review}</h3>
                <Rating rating={State?.rating?.total_votes[i]} />
              </div>
            ))}
        </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductDetail;
