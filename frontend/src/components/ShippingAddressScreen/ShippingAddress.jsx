import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutComponent/CheckoutSteps';
import { useAuth0 } from '@auth0/auth0-react';

function ShippingAddress() {

    const navigate = useNavigate()
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!user.email_verified) {
          navigate('/signin');
        }
      }, [user, navigate]);
    
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(saveShipping({ address, city, postalCode, country }));
      navigate('/payment');
    }

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Dirección de envio</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Pais</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
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
