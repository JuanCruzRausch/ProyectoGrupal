import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux'

export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  const { cartItem, shippingAddress } = useSelector(state=>state.CartReducer.cart);
//   const { cart, userInfo } = state;

//   const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; //123.1234 => 123.12
//   const price = round2(
//     cartItem.reduce((a, c) => a + c.quantity * c.price, 0)
//   );
//   cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
//   cart.taxPrice = round2(0.15 * cart.itemsPrice);
//   cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {};

  return (
    <div>
      
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Datos de Envío</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {shippingAddress.fullName} <br />
                <strong>Address: </strong> {shippingAddress.address},
                {shippingAddress.city}, {shippingAddress.postalCode},
                {shippingAddress.country}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>



          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {cartItem.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>cantidad</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Edit</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summery</Card.Title>
              <ListGroup variant="flush">
                {/* <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cartItem.price.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${cartItem.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${cart.taxPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item> */}
                <ListGroup.Item>
                  <Row>
                    <Col>Order Total</Col>
                    <Col>
                      <strong>78787</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      onClick={placeOrderHandler}
                      disabled={cartItem.length === 0}
                    >
                      Place Order
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
