import React from 'react';
import { Container, PrivacyContainer } from './Privacy.module.css';
import arrow from '../../assets/img/leftarrow.png';
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function Privacy() {
  return (
    <div>
      <Helmet>
        <title> ML7E Privacidad</title>
      </Helmet>
      <div className={Container}>
        <div className={Detail_Links}>
          <img src={arrow} alt="back" />
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>
        <h1>Privacidad</h1>
        <div className={PrivacyContainer}>
          <h1>Tu privacidad, tus derechos y nuestro compromiso</h1>
          <h2>
            Usamos tus datos para crear herramientas que hagan más fácil tu vida
            cotidiana. Te contamos qué hacemos con tu información.
          </h2>
          <div>
            <h3>Somos transparentes</h3>
            <p>
              Nos esforzamos por procesar información de calidad, precisa y
              actualizada. Por ejemplo, guardamos tu información y la
              actualizamos en todas nuestras plataformas, tus compras te llegan
              correctamente y te ahorrás completar formularios.
            </p>
          </div>
          <div>
            <h3>Trabajamos con calidad</h3>
            <p>
              Te explicamos de manera simple y clara los usos que le damos a tu
              información, cómo y por qué procesamos tus datos y con quién los
              podemos compartir.
            </p>
          </div>
          <div>
            <h3>Protegemos tus datos</h3>
            <p>
              Protegemos tu información personal con los más altos estándares de
              seguridad. No comercializamos tus datos..👀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
