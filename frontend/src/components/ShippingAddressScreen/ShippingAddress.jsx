import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutComponent/CheckoutSteps';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux'
import validateFunction from '../validate';
import {ToastContainer, toast} from 'react-toastify'
  

function ShippingAddress() {

  
    const navigate = useNavigate()
    const [data, setData] = useState({
      address:'',
      city:'',
      postalCode:'',
      country:'',
      fullName:''
    });
    const [validate, setValidate ] = useState({
      address:true,
      city:true,
      postalCode:true,
      country:true,
      fullName:true,
    });

    const { user, isAuthenticated, isLoading } = useAuth0();
  
    const dispatch = useDispatch();

    const saveShipping = () => {
      return
    };
    
    useEffect(() => {
        if (!user?.email_verified) {
          navigate('/signin');
        }
      }, [user, navigate]);
    const handleOnChange = (e) =>{
      setValidate({...validate, [e.target.name]: validateFunction( e.target.value)}) 
      setData({
        ...data, [e.target.name]:e.target.value
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if(data.fullName && data.address && data.country && data.city && data.postalCode){
        dispatch(saveShipping({ address, city, postalCode, country }));
        navigate('/payment');
      }};
    

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Dirección de envio</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              name="fullName"
              value={data.fullName}
              onChange={(e) => handleOnChange(e)}
              required
            />
            {validate.fullName===false&&<p>debe tener un nombre</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              value={data.address}
              name="address"
              onChange={(e) => handleOnChange(e)}
              required
            />
            {validate.address===false&&<p>debe tener una dirección</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              name="city"
              value={data.city}
              onChange={(e) => handleOnChange(e)}
              required
            />
            {validate.city===false&&<p>debe tener una ciudad</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              name="postalCode"
              value={data.postalCode}
              onChange={(e) => handleOnChange(e)}
              required
            />
            {validate.postalCode===false&&<p>codigo postal requerido</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Pais</Form.Label>
            <Form.Control
              value={data.country}
              name="country"
              onChange={(e) => handleOnChange(e)}
              required
            />
            {validate.country===false&&<p>debe tener un país</p>}
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continuar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ShippingAddress;
