import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Small_Container, Form_Div } from './Signup.module.css';
import { useDispatch } from 'react-redux'
import { signUp } from '../../redux/actions';

export default function SignupScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm:"",
    address: ""
  })
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
  }
  const handleOnChange = (e) =>{
   setData({...data, [e.target.name]: e.target.value})
  }
  return (
    <Container className={Small_Container}>
      <div className={Form_Div}>
        <h1 className="my-3">Registro</h1>
        <Form onSubmit={(e)=>handleOnSubmit(e)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            onChange={ e => handleOnChange(e)} 
            value={data.name} 
            name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            onChange={ e => handleOnChange(e)} 
            value={data.email} 
            name="email" 
            type="email" 
            required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>dirección</Form.Label>
            <Form.Control 
            onChange={ e => handleOnChange(e)} 
            value={data.address} 
            name="address"  
            required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            onChange={ e => handleOnChange(e)} 
            value={data.password} 
            name="password" 
            type="password" 
            required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control 
            onChange={ e => handleOnChange(e)} 
            value={data.passwordConfirm} 
            name="passwordConfirm" 
            type="password" required />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Crear Cuenta</Button>
          </div>
          <div className="mb-3">
            Ya tienes cuenta?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Inicia sesión</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
}
