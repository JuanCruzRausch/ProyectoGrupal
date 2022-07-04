import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container_Small, Form_Div } from './PerfilEditar.module.css';
import { useSelector, useDispatch } from 'react-redux'
import countries from '../Json/countries.jsx'
import states from '../Json/states.jsx'
import { updateUser } from '../../redux/actions/userAction';
import { setUser } from '../../redux/actions/userAction';
export default function PerfilEditar() {
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  // const [address, setAdress] = React.useState({...user?.address})
  const editUser  = (payload) =>{
    return {type: "SET_USER", payload}
  }
  const handleOnChange = (e, i) => {
    dispatch(editUser({
      ...user,
      [e]:i
    }));
  }
  const addressOnChange = (name, value) => {
    handleOnChange("address", {...user.address,[name]:value})
  }
  const dptoOnChange = (name, value) => {
    addressOnChange("dpto", {...user.address.dpto,[name]:value})
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(user))
    dispatch(setUser(user))
  }
  return (
    <div className='container'>
      <div className={Form_Div}>
        <h1 className="my-3">Perfil</h1>
        <form onSubmit={(e)=>onHandleSubmit(e)}>
          <Form.Group  className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required 
            name="name"
            onChange={(e)=>handleOnChange(e.target.name, e.target?.value)}
            value={user?.name}
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control required 
            name="last_name"
            onChange={(e)=>handleOnChange(e.target.name, e.target?.value)}
            value={user?.last_name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control 
             name="phone"
             onChange={(e)=>handleOnChange(e.target.name, e.target?.value)}
             value={user?.phone}
            type="text" />
          </Form.Group>
          <Form.Label>Pais</Form.Label>
            <Form.Select 
            aria-label="Default select example" 
            value={user?.address?.country} 
            name = "country"
            onChange={(e)=>addressOnChange(e.target.name, e.target.value)}>
              <option value="" default>Seleccione un pais</option>
              {countries.filter(e=> e.name_es !=="").map(country => <option key={country.id}>{country.name}</option> )}
            </Form.Select>
            <Form.Label>Provincia</Form.Label>
            <Form.Select aria-label="Default select example"
                  value={user?.address?.province} 
                  name = "state"
                  onChange={(e)=>addressOnChange(e.target.name, e.target.value)}>
              <option value='' disabled default>Seleccione una provincia</option>
              {states.filter(state => state.country_name === user?.address?.country).map(state => <option key={state.id} value={state.name}>{state.name}</option> )}
            </Form.Select>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control 
             name="city"
             onChange={(e)=>addressOnChange(e.target.name, e.target.value)}
             value={user?.address?.city}
            type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>Calle</Form.Label>
            <Form.Control 
             name="street"
             onChange={(e)=>addressOnChange(e.target.name, e.target.value)}
             value={user?.address?.street}
            type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Número</Form.Label>
            <Form.Control 
             name="number"
             onChange={(e)=>addressOnChange(e.target.name, e.target.value)}
             value={user?.address?.number}
            type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalcode">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control 
             name="postalcode"
             onChange={(e)=>addressOnChange(e.target.name, e.target.value)}
             value={user?.address?.postalcode}
            type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="floor">
          <h2>Departamento:</h2>
            <Form.Label>Piso</Form.Label>
            <Form.Control 
             name="floor"
             onChange={(e)=>dptoOnChange(e.target.name, e.target.value)}
             value={user?.address?.dpto?.floor}
            type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Número</Form.Label>
            <Form.Control 
             name="number"
             onChange={(e)=>dptoOnChange(e.target.name, e.target.value)}
             value={user?.address?.dpto?.number}
            type="text" />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
