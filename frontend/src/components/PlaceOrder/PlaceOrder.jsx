import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logo, container, GeneralContainer } from './PlaceOrder.module.css';
import CheckoutSteps from '../CheckoutComponent/CheckoutSteps';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../redux/actions/CartActions';
import { Helmet } from 'react-helmet-async';

export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  const { cartItem, shippingAddress } = useSelector(
    (state) => state.CartReducer.cart
  );
  const { user } = useAuth0();
  //   const { cart, userInfo } = state;

  //   const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; //123.1234 => 123.12
  //   const price = round2(
  //     cartItem.reduce((a, c) => a + c.quantity * c.price, 0)
  //   );
  //   cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  //   cart.taxPrice = round2(0.15 * cart.itemsPrice);
  //   cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const state = useSelector((state) => state.CartReducer.cart.cartItem);
  const SingleCart = useSelector((state) => state.CartReducer.SingleCart);
  const PrecioTotal = JSON.stringify(
    state.reduce((prev, next) => prev + next.price * next.quantity, 0)
  );
  const dispatch = useDispatch();
  JSON.parse(localStorage.getItem('cart'));
  const placeOrderHandler = async () => {
    dispatch(
      sendOrder({
        PrecioTotal,
        cartItem,
        shippingAddress,
        user,
      })
    );
    navigate('/');
  };

  console.log(SingleCart.price === undefined && cartItem.length === 0);
  return (
    <div>
      <Helmet>
        <title>Orden de Compra</title>
      </Helmet>
      <div className={GeneralContainer}>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className={container}>
          <h1 className="my-3">Orden de Compra</h1>
          <Row>
            <Col md={8}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Datos de Envío</Card.Title>
                  <Card.Text>
                    <strong>Nombre:</strong> {shippingAddress?.fullName} <br />
                    <strong>Pais: </strong> {shippingAddress?.country} <br />
                    <strong>Provincia:</strong> {shippingAddress?.state} <br />
                    <strong>Municipio:</strong> {shippingAddress?.city} <br />
                    <strong>Dirección:</strong> {shippingAddress?.address}{' '}
                    <br />
                    <strong>Código Postal:</strong>{' '}
                    {shippingAddress?.postalCode} <br />
                  </Card.Text>
                  <Link to="/shipping">Editar</Link>
                </Card.Body>
              </Card>

              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Items</Card.Title>
                  <ListGroup variant="flush">
                    {SingleCart.title !== undefined ? (
                      <ListGroup.Item>
                        <Row className="align-items-center">
                          <Col md={6}>
                            <img
                              className={logo}
                              src={SingleCart.thumbnail}
                              alt={SingleCart.title}
                              //   className="img-fluid rounded img-thumbnail"
                            ></img>{' '}
                            <Link to={`/${SingleCart.product}`}>
                              {SingleCart.title}
                            </Link>
                          </Col>
                          <Col md={3}>
                            <span>{SingleCart.quantity}</span>
                          </Col>
                          <Col md={3}>
                            $
                            {Math.round(SingleCart.quantity * SingleCart.price)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ) : (
                      cartItem?.map((item) => (
                        <ListGroup.Item key={item.product}>
                          <Row className="align-items-center">
                            <Col md={6}>
                              <img
                                className={logo}
                                src={item.thumbnail}
                                alt={item.title}
                                //   className="img-fluid rounded img-thumbnail"
                              ></img>{' '}
                              <Link to={`/products/${item.product}`}>
                                {item.title}
                              </Link>
                            </Col>
                            <Col md={3}>
                              <span>{item.quantity}</span>
                            </Col>
                            <Col md={3}>
                              ${Math.round(item.quantity * item.price)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resumen de Orden</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Items</Col>
                        <Col>
                          $
                          {SingleCart.price !== undefined
                            ? Math.round(SingleCart.quantity * SingleCart.price)
                            : Number(PrecioTotal).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Costo de envío</Col>
                        <Col>${0.0}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Iva</Col>
                        <Col>${0.0}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Valor Total</Col>
                        <Col>
                          <strong>
                            $
                            {SingleCart.price !== undefined
                              ? Math.round(
                                  SingleCart.quantity * SingleCart.price
                                )
                              : Number(PrecioTotal).toFixed(2)}
                          </strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button
                          type="button"
                          onClick={placeOrderHandler}
                          disabled={
                            cartItem.length === 0 &&
                            SingleCart.price == undefined
                          }
                        >
                          Comprar
                        </Button>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
