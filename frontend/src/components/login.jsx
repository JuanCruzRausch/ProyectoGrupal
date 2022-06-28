import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  function login(){
    loginWithRedirect()
  
  }
  return <button onClick={() =>login() }>Log In</button>;
};

export default LoginButton;
