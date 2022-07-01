import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { checkout_step, active } from './CheckoutSteps.module.css';

export default function CheckoutSteps(props) {
  return (
    <Row className={checkout_step}>
      <Col className={props.step1 ? active : ''}>Registrarse</Col>
      <Col className={props.step2 ? active : ''}>Envio</Col>
      <Col className={props.step3 ? active : ''}>Realizar Pedido</Col>
    </Row>
  );
}
