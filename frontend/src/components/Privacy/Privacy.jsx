import React from 'react';
import { Container, PrivacyContainer } from './Privacy.module.css';
import arrow from '../../assets/img/leftarrow.png';
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux'
import { DetailDark } from '../Terms/TermsDark.module.css';
import Accordion from 'react-bootstrap/Accordion';

function Privacy() {
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  return (
    <div>
      <Helmet>
        <title> ML7E Privacidad</title>
      </Helmet>
      <div className={Container}>
        <div className={isdarkMode ? DetailDark : Detail_Links}>
          <img src={arrow} alt="back" />
          <Link to="/">
            <h2>Atras</h2>
          </Link>
        </div>
          <h1>Tu privacidad, tus derechos y nuestro compromiso</h1>
          <h2>
            Usamos tus datos para crear herramientas que hagan más fácil tu vida
            cotidiana. Te contamos qué hacemos con tu información.
          </h2>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Somos transparentes</Accordion.Header>
        <Accordion.Body>
        Nos esforzamos por procesar información de calidad, precisa y
              actualizada. Por ejemplo, guardamos tu información y la
              actualizamos en todas nuestras plataformas, tus compras te llegan
              correctamente y te ahorrás completar formularios.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Trabajamos con calidad</Accordion.Header>
        <Accordion.Body>
        Te explicamos de manera simple y clara los usos que le damos a tu
              información, cómo y por qué procesamos tus datos y con quién los
              podemos compartir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Protegemos tus datos</Accordion.Header>
        <Accordion.Body>
          Protegemos tu información personal con los más altos estándares de
          seguridad. No comercializamos tus datos..👀
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  );
}

export default Privacy;
