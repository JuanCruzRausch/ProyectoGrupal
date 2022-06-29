import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavDropdown } from "react-bootstrap";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div >
      <NavDropdown.Item
      onClick={() => logout({ returnTo: window.location.origin })}>
        Salir
      </NavDropdown.Item>
    </div>
  );
};

export default LogoutButton;
