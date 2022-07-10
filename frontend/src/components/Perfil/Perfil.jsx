import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Container_card, Container_Perfil, container_seller, Container_text,Container_img_button, IniciarSesion, Buttons, adress,Vendedor, Admin, Common }  from './Perfil.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import LoginButton from '../Auth0/login';
import SellerProfile from '../Seller/SellerProfile';
export default function Perfil() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const userState = useSelector( state => state.userReducer.user)
  const sellerState = useSelector ( state => state.userReducer.seller)
  const registered = userState?.registration_date.split("-")
  console.log(userState)
     
  return (
<div className={Container}>
    { isAuthenticated? (
    <div className={Container_card}>
      <div>

          <div className={Container_Perfil}>
          <div className={Container_img_button}>
            
          {userState?.photo?(<img src={userState?.photo} alt="perfil-img"/>):
          (<img src={user.picture} alt="perfil-img"/>)}
          {!userState?.authorization.roles.includes("seller")?(<Link to="/perfil/altavendedor">
                <button>
                Alta de vendedor
                </button>
            </Link>):
            (
            <div className={container_seller}>  
              <span>
              <br /> 
              <label>Redes Sociales:</label>
              {sellerState?.social_net?.fb?(
              <div>
                <br /> 
                  <div>
                    <label htmlFor="">facebook: {sellerState.social_net.fb}</label>
                  </div>
                  </div>)
              :null}
                  <div>
                  {sellerState?.social_net?.tw?<label htmlFor="">twitter: {sellerState.social_net.tw}</label>:null}
                  </div>
                  <div>
                  {sellerState?.social_net?.ig?<label htmlFor="">instagram: {sellerState.social_net.ig}</label>:null}
                  </div>
              <label>
              <Link to="/perfil/redessociales">editar</Link>
                  </label>
                  <br /> 
              </span>
              <span>
                <div>
                </div>
                <div>
              <label>Marca:</label> 
              <br /> <br /> 
                {sellerState?.brand?<label htmlFor="">{sellerState.brand}</label>:null}
                </div>
                <label htmlFor="">
                  <Link to="/perfil/marca">
                      editar
                  </Link>
                </label>
               
                    
              </span>
            </div>
          )}
          <div className={Buttons}>
            <Link to="/perfil/editar">
                <button>
                Editar perfil
                </button>
            </Link>
            {userState?.authorization?.roles.includes("admin") ? (
              <Link to="/admin/dashboard">
                <button>Administra el sitio</button>
              </Link>
            ) : null}
            {userState?.authorization?.roles.includes("seller")?(<Link to="/perfil/vendedor">
                <button>
                Perfil de Vendedor
                </button>
            </Link>):null}
            <Link to="/perfil/historial">
            <button>
               Historial de compras
            </button>
            </Link>
          </div> 
          
          </div>
          <div className={Container_text}>
          <div>
             <h3> Nombre: </h3><h2>{userState?.name}</h2>
          </div>
          <div>
             <h3> Apellido: </h3><h2>{userState?.lastname}</h2>
          </div>
          <div>
             <h3> Email: </h3><h2>{userState?.email}</h2>
          </div>
          {userState?.address?(
          <div className={adress}>
            <div>
             <h3> País: </h3><h2>{userState?.country}</h2>
            </div>
            <div>
             <h3> Provincia:</h3> <h2>{userState?.address?.location}</h2>
            </div>
            <div>
             <h3> Ciudad:</h3> <h2>{userState?.address?.city}</h2>
            </div>
            <div>
             <h3> Código Postal:</h3> <h2>{userState?.address?.postalcode}</h2>
            </div>
            <div>  
             <h3> Calle:</h3> <h2>{userState?.address?.street}</h2>
            </div>
            <div>
             <h3> Número: </h3><h2>{userState?.address?.number}</h2>
            </div>
              {userState.address?.dpto?(<span>
              <div>
                <h3>Departamento: </h3>
              </div>
              <div>
                <h2>{userState?.address?.dpto?.floor}</h2>
              </div>
              <div>
                <h2>{userState?.address?.dpto?.number}</h2>
              </div>
                </span>)
              :null}
          </div>)
          :null}
          <div>
          <h3> Tipo de usuario:</h3> {userState?.authorization?.roles.map(rol=>
          { if(rol === "seller"){
            return <h2 className={Vendedor}>Vendedor</h2>
           }
           if(rol === "admin"){
             return  <h2 className={Admin}>el admin😎</h2>
           }
           if(rol === "moderator"){
            return <h2>el casi admin😎</h2>
           }
          if(rol === "common"){
            return <h2 className={Common}>DATE DE ALTA GIL</h2>
           }
          })}
          </div>
          {userState?.registration_date&&(<div >
            <h3> registrado desde: </h3>
              <h2>{registered[1]}/{registered[0]}</h2>
          </div>)}
          <div>
          <h3> télefono: </h3><h2>{userState?.phone}</h2>
          </div>
          {userState?.credit_card?(<div>
             Número de Cuenta: <h2>{userState?.credit_card}</h2>
          </div>):null}
      </div>
        </div>
      </div>
  </div>)
  :<div className={IniciarSesion}>

    <h1>Iniciar sesion</h1>
      <LoginButton />
    </div>}

</div>
  )
}