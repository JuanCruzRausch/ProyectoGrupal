import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container_Small, Form_Div } from "./AltaVendedor.module.css";
import { useSelector, useDispatch } from "react-redux";
import countries from "../Json/countries.jsx";
import states from "../Json/states.jsx";
import { addSeller, patchToSeller, setUser } from "../../redux/actions/userAction"
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
export default function AltaVendedor() {
  const [checkout, setCheckout] =  React.useState(false)
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate()
  const seller = useSelector((state) => state.userReducer.seller)
  const user = useSelector((state) => state.userReducer.user);
  const {isAuthenticated, user: auth0user} = useAuth0()
  const dispatch = useDispatch();
  const editSeller = (payload) => {
    return { type: "SET_SELLER", payload };
  };
  React.useEffect(()=>{
    if (user?.authorization?.roles[0]==="seller"){
      navigate("/perfil")
    }
    if (!isAuthenticated){
      loginWithRedirect()
    }

    dispatch(editSeller({
      ...seller,
      country: user?.country,
      subsidiary: seller?.subsidiary?.province&& seller?.subsidiary?.postalcode&&seller?.subsidiary?.city?
      {...seller?.subsidiary}
      :{...user?.address,  province: user?.address?.province}
    }))
  },[user])

  const sellerOnChange = (e, i) => {
    dispatch(
      editSeller({
        ...seller,
        [e]: i,
      }
    ));
  };
  const social_netOnChange = (name, value) => {
    sellerOnChange("social_net", { ...seller.social_net, [name]: value });
  };

  const subsidiaryOnChange = (name, value) => {
    sellerOnChange("subsidiary", { ...seller.subsidiary, [name]: value });
  };

  const onHandleSubmit = async(e) => {
    e.preventDefault()
    if(checkout){
      dispatch(addSeller({...seller,user: user._id}))
      .then(()=> dispatch( patchToSeller( user._id)))
      .then(()=> dispatch(setUser(auth0user)))
      .then(()=> alert("success"))
      .catch(error => console.log(error))
      
    }
    
  };
  return (
    <div className="container">
      <div className={Form_Div}>
        <h1 className="my-3">Alta de Vendedor</h1>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <Form.Group className="mb-3" controlId="name">
          <Form.Label>Marca</Form.Label>
            <Form.Control
              name="brand"
              onChange={(e) => sellerOnChange(e.target.name, e.target?.value)}
              value={seller?.brand}
            />
            <h2>Redes Sociales</h2>
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              name="fb"
              onChange={(e) => social_netOnChange(e.target.name, e.target?.value)}
              value={seller?.social_net?.fb}
            />
            <Form.Label>Twitter</Form.Label>
            <Form.Control
              name="tw"
              onChange={(e) => social_netOnChange(e.target.name, e.target?.value)}
              value={seller?.social_net?.tw}
            />
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              name="ig"
              onChange={(e) => social_netOnChange(e.target.name, e.target?.value)}
              value={seller?.social_net?.ig}
            />
            <h2>Dirección</h2>
            <Form.Label>Pais</Form.Label>
          <Form.Select
            value={seller?.country}
            aria-label="Default select example"
            name="country"
            onChange={(e) => sellerOnChange(e.target.name, e.target.value)}
          >
            <option value="" default>
              Seleccione un pais
            </option>
            {countries
              .filter((e) => e.name_es !== "")
              .map((country) => (
                <option key={country.id}>{country.name}</option>
              ))}
          </Form.Select>
          <Form.Label>Provincia</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={seller?.subsidiary?.province}
            name="province"
            onChange={(e) => subsidiaryOnChange(e.target.name, e.target.value)}
          >
            <option value="" disabled default>
              Seleccione una provincia
            </option>
            {states
              .filter((state) => state.country_name === seller?.country)
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
              value={seller?.subsidiary?.city}
              onChange={(e) => subsidiaryOnChange(e.target.name, e.target.value)}
              defaultValue={user?.address?.city}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              name="street"
              value={seller?.subsidiary?.street}
              onChange={(e) => subsidiaryOnChange(e.target.name, e.target.value)}
              default={user?.address?.street}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Número</Form.Label>
            <Form.Control
              name="number"
              value={seller?.subsidiary?.number}
              onChange={(e) => subsidiaryOnChange(e.target.name, e.target.value)}
              default={user?.address?.number}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalcode">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              name="postalcode"
              value={seller?.subsidiary?.postalcode}
              onChange={(e) => subsidiaryOnChange(e.target.name, e.target.value)}
              default={user?.address?.postalcode}
              type="number"
            />
          </Form.Group>
          
          <input require onChange={()=>  setCheckout(!checkout)} 
          type="checkbox" name="condiciones" />
          <Form.Label for="condiciones">Aceptar los términos y condiciones <a href="pagina_condiciones.html">condiciones</a></Form.Label>
 

          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Aceptar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
