import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from 'react-bootstrap'
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const login = (e) =>{
    e.preventDefault()
    loginWithRedirect()
  }
  
  return <div><Nav.Link href="#" onClick={(e) => login(e) }>Log In</Nav.Link></div>
};

export default LoginButton;
