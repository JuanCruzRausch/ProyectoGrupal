import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container_Small, Form_Div } from './Perfil.module.css';

export default function Perfil() {
  return (
    <div className={Container_Small}>
      <div className={Form_Div}>
        <h1 className="my-3">Perfil</h1>
        <form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
