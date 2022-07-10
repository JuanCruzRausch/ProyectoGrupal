import React from 'react'
import {FooterContainer, FooterSubcontainer1, FooterSubcontainer2,DarkFooter} from './Footer.module.css'
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Footer() {
    const mode = useSelector((state)=> state.darkMode)
    const { isdarkMode } = mode;
  return (
    <div className={isdarkMode? DarkFooter : FooterContainer}>
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