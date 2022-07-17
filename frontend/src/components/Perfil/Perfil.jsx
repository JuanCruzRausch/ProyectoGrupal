import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Container_card,
  Container_Perfil,
  container_seller,
  Container_text,
  Container_img_button,
  IniciarSesion,
  Buttons,
  adress,
  Vendedor,
  Admin,
  Common,
} from './Perfil.module.css';
import { DarkContainer, DarkText } from './DarkPerfil.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import LoginButton from '../Auth0/login';
import SellerProfile from '../Seller/SellerProfile';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Perfil() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading } = useAuth0();
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  const userState = useSelector((state) => state.userReducer.user);
  const sellerState = useSelector((state) => state.userReducer.seller);
  const registered = userState?.registration_date.split('-');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleGoTo(e){
    navigate(e.target.value)
  }
  return (
    <div>
      <Helmet>
        <title>ML7E Perfil</title>
      </Helmet>
      <div className={Container}>
        {isAuthenticated ? (
          <div className={isdarkMode ? DarkContainer : Container_card}>
            <div>
              <div className={Container_Perfil}>
                <div className={Container_img_button}>
                  {userState?.photo ? (
                    <img src={userState?.photo} alt="perfil-img" />
                  ) : (
                    <img src={user.picture} alt="perfil-img" />
                  )}
                  {!userState?.authorization.roles.includes('seller') ? (
                    <Link to="/perfil/altavendedor">
                      <button>Alta de vendedor</button>
                    </Link>
                  ) : (
                    <div className={container_seller}>
                      <span>
                        <br />
                        <label>Redes Sociales:</label>
                        {sellerState?.social_net?.fb ? (
                          <div>
                            <br />
                            <div>
                              <label htmlFor="">
                                Facebook: {sellerState.social_net.fb}
                              </label>
                            </div>
                          </div>
                        ) : null}
                        <div>
                          {sellerState?.social_net?.tw ? (
                            <label htmlFor="">
                              Twitter: {sellerState.social_net.tw}
                            </label>
                          ) : null}
                        </div>
                        <div>
                          {sellerState?.social_net?.ig ? (
                            <label htmlFor="">
                              Instagram: {sellerState.social_net.ig}
                            </label>
                          ) : null}
                        </div>
                        <label>
                          <Link to="/perfil/redessociales">
                            <Button variant="primary">Editar</Button>
                            </Link>
                        </label>
                        <br />
                      </span>
                      <span>
                      <div>
                          <label>Marca:</label>
                          <br /> <br />
                          {sellerState?.brand ? (
                            <label htmlFor="">{sellerState.brand}</label>
                          ) : null}
                        </div>
                        <label htmlFor="">
                          <Link to="/perfil/marca">
                            <Button variant="primary">Editar</Button>
                          </Link>
                        </label>
                      </span>
                    </div>
                  )}
                  <div className={Buttons}>
                    <Form.Select onChange={(e) => handleGoTo(e)}>
                      <option default value=" ">
                            Opciones de perfil
                      </option>
                      {userState?.authorization?.roles.includes('admin') ? (
                       <option value="/admin/dashboard">
                        Administra el sitio
                      </option> 
                      ) : null}
                        <option value="/perfil/editar">
                            Editar perfil
                        </option>
                      {userState?.authorization?.roles.includes('seller') ? (
                       <option value="/perfil/ventas">
                          Historial de Ventas
                        </option> 
                      ) : null}
                      <option value="/perfil/compras">
                        Historial de compras
                      </option>                                   
                    </Form.Select>

                    {userState?.authorization?.roles.includes('seller') ? (
                      <Link to="/perfil/vendedor">
                        <button>Perfil de Vendedor</button>
                      </Link>
                    ) : null}
                    {userState?.authorization?.roles.includes('seller') ? (
                      <Link to="/publicar">
                        <button>Publica tu producto</button>
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className={Container_text}>
                  <div>
                    <h3> Nombre: </h3>
                    <h2>{userState?.name}</h2>
                  </div>
                  <div>
                    <h3> Apellido: </h3>
                    <h2>{userState?.lastname}</h2>
                  </div>
                  <div>
                    <h3> Email: </h3>
                    <h2>{userState?.email}</h2>
                  </div>
                  {userState?.address ? (
                    <div className={adress}>
                      <div>
                        <h3> País: </h3>
                        <h2>{userState?.country}</h2>
                      </div>
                      <div>
                        <h3> Provincia:</h3>{' '}
                        <h2>{userState?.address?.province}</h2>
                      </div>
                      <div>
                        <h3> Ciudad:</h3> <h2>{userState?.address?.city}</h2>
                      </div>
                      <div>
                        <h3> Código Postal:</h3>{' '}
                        <h2>{userState?.address?.postalcode}</h2>
                      </div>
                      <div>
                        <h3> Calle:</h3> <h2>{userState?.address?.street}</h2>
                      </div>
                      <div>
                        <h3> Número: </h3>
                        <h2>{userState?.address?.number}</h2>
                      </div>
                      {userState.address?.dpto ? (
                        <span>
                          <div>
                            <h3>Departamento: </h3>
                          </div>
                          <div>
                            <h2>{userState?.address?.dpto?.floor}</h2>
                          </div>
                          <div>
                            <h2>{userState?.address?.dpto?.number}</h2>
                          </div>
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                  <div>
                    <h3> Tipo de usuario:</h3>{' '}
                    {userState?.authorization?.roles.includes("admin") ? 
                    <h2>Admin</h2> : userState?.authorization?.roles.includes("seller") ?
                    <h2>Vendedor</h2> : userState?.authorization?.roles.includes("buyer") ?
                    <h2>Comprador</h2> : <h2>Sin Verificar</h2>}
                  </div>
                  {userState?.registration_date && (
                    <div>
                      <h3> Registrado desde: </h3>
                      <h2>
                        {registered[1]}/{registered[0]}
                      </h2>
                    </div>
                  )}
                  <div>
                    <h3> Télefono: </h3>
                    <h2>{userState?.phone}</h2>
                  </div>
                  {userState?.credit_card ? (
                    <div>
                      Número de Cuenta: <h2>{userState?.credit_card}</h2>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={IniciarSesion}>
            <h1>Iniciar sesion</h1>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}
