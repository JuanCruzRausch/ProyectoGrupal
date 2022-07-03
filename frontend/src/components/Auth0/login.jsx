import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from 'react-bootstrap'
import React from "react";
import {login1} from './login.module.css'
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const login = (e) =>{
    e.preventDefault()
    loginWithRedirect()
  }
  
  return <div><Nav.Link href="#" className={login1} onClick={(e) => login(e) }>Ingresar</Nav.Link></div>
};

export default LoginButton;
