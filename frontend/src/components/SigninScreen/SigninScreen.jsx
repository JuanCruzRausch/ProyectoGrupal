import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { Small_Container, Form_Div } from './Signin.module.css';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className={Small_Container}>
      <div className={Form_Div}>
        <h1 className="my-3">Iniciar sesion</h1>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Iniciar sesion</Button>
          </div>
          <div className="mb-3">
            <Link to={`/signup?redirect=${redirect}`}>Crear cuenta nueva</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
}
