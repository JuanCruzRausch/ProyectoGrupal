import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Small_Container, Form_Div } from './Signup.module.css';

export default function SignupScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className={Small_Container}>
      <div className={Form_Div}>
        <h1 className="my-3">Registro</h1>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign Up</Button>
          </div>
          <div className="mb-3">
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
}
