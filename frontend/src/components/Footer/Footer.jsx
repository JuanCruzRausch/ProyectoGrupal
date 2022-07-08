import React from 'react'
import {FooterContainer, FooterSubcontainer1, FooterSubcontainer2, MiCuenta} from './Footer.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Auth0/login';
import LogoutButton from '../Auth0/logout';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
function Footer() {
    const navigate = useNavigate()
    const { user, isAuthenticated} = useAuth0();
    const userLogged = useSelector((state) => state.userReducer.user)
  return (
    <div className={FooterContainer}>
        <div className={FooterSubcontainer1}>
            <div>
                <Link to="/privacidad">
                <h1>Politica de privacidad</h1>
                </Link>
            </div>
            <div>
            <Link to="/terminos-y-condiciones">
                <h1>Terminos y condiciones</h1>
            </Link>
            </div>
            <div>
                {isAuthenticated ? (
                    <div className={MiCuenta}>
                            <a onClick={() => navigate("/perfil")}>perfil</a>
                    </div>
        ) : (
          <LoginButton />
        )}
            </div>
            <div>
                <Link to="/Nosotros">
                    <h1>Acerca de nosotros</h1>
                </Link>
            </div>
        </div>
        <hr />
        <div className={FooterSubcontainer2}>
            <div>
                <h1>Copyright © 1999-2022 Mercado Los 7 Enanitos S.A.</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer