import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutComponent/CheckoutSteps';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import validateFunction from '../validate';
import { Container_Small, Form_Div, Container } from './Shipping.module.css';
import countries from '../Json/countries.jsx';
import states from '../Json/states.jsx';
import { saveShippingAddress } from '../../redux/actions/CartActions';
import { Helmet } from 'react-helmet-async';

//import { ToastContainer, toast } from 'react-toastify';

function ShippingAddress() {
  const shipping = useSelector(
    (state) => state.CartReducer.cart.shippingAddress
  );
  const navigate = useNavigate();
  const [countryId, setCountryId] = useState([]);
  const [data, setData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
    fullName: '',
  });
  const [validate, setValidate] = useState({
    address: true,
    city: true,
    postalCode: true,
    country: true,
    state: true,
    fullName: true,
  });

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const saveShipping = () => {
    return;
  };

//  useEffect(() => {
//    if (!user?.email_verified) {
//      loginWithRedirect();
//      navigate(-1);
//    }
//  }, [user, navigate]);
  const handleOnChange = (e, id) => {
    setValidate({
      ...validate,
      [e.target.name]: validateFunction(e.target.value),
    });
    dispatch(
      saveShippingAddress({
        ...shipping,
        [e.target.name]: e.target.value,
      })
    );
    if (e.target.name == 'country') {
      setCountryId(id);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      shipping.fullName &&
      shipping.address &&
      shipping.country &&
      shipping.city &&
      shipping.postalCode
    ) {
      navigate('/placeorder');
    }
  };

  return (
    <div>
      <Helmet>
        <title>ML7E Envio</title>
      </Helmet>
      <div className={Container}>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div className={Container_Small}>
          <div className={Form_Div}>
            <h1 className="my-3">Dirección de envio</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  name="fullName"
                  value={shipping.fullName}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                {validate.fullName === false && <p>debe tener un nombre</p>}
              </Form.Group>
              <Form.Label>Pais</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={shipping.country}
                name="country"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="" default>
                  Seleccione un pais
                </option>
                {countries
                  .filter((e) => e.name_es !== '')
                  .map((country) => (
                    <option key={country.id}>{country.name}</option>
                  ))}
              </Form.Select>
              <Form.Label>Provincia</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={shipping.state}
                name="state"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="" disabled default>
                  Seleccione una provincia
                </option>
                {states
                  .filter((state) => state.country_name === shipping.country)
                  .map((state) => (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  ))}
              </Form.Select>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  name="city"
                  value={shipping.city}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                {validate.city === false && <p>debe tener una ciudad</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  value={shipping.address}
                  name="address"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                {validate.address === false && <p>debe tener una dirección</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  name="postalCode"
                  value={shipping.postalCode}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                {validate.postalCode === false && (
                  <p>codigo postal requerido</p>
                )}
              </Form.Group>
              <div className="mb-3">
                <Button variant="primary" type="submit">
                  Continuar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
