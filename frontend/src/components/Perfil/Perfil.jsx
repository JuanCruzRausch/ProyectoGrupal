import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Container_card, Container_Perfil,Container_text,Text_transacciones, Text_completed, Text_canceled, Text_total, Text_intereses, Intereses_container,Container_img_button, SingleProduct, ItemsContainer, Historial, IniciarSesion, Buttons}  from './Perfil.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import LoginButton from '../Auth0/login';
export default function Perfil() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const userState = useSelector( state => state.userReducer.user)
  const registered = userState?.registration_date.split("-")
  console.log(userState)
    const perfil = {
        nombre: "Juanito Perez",
        email: "juanito312@gmail.com",
        photo: "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
        address: "calle 76 # 35 - 22",
        reputation: 5,
        status: "platinium",
        register_date:"20/06/2020",
        interest: [{
            "id": "MLA1367",
            "name": "Antigüedades y Colecciones"
          },
          {
            "id": "MLA1368",
            "name": "Arte, Librería y Mercería"
          },
          {
            "id": "MLA1743",
            "name": "Autos, Motos y Otros"
          },],
        transactions: {
            completed:4,
            canceled: 2,
            total: 9
        }        
    }
     
  return (
<div className={Container}>
    { isAuthenticated? (
    <div className={Container_card}>
      <div>

          <div className={Container_Perfil}>
          <div className={Container_img_button}>
          {userState?.photo?(<img src={userState?.photo} alt="perfil-img"/>):
          (<img src={user.picture} alt="perfil-img"/>)}
          <div className={Buttons}>
            <Link to="/perfil/editar">
                <button>
                Editar perfil
                </button>
            </Link>
            <Link to="/enano">
                <button>
                Administra el sitio
                </button>
            </Link>
            <Link to="/perfil/altavendedor">
                <button>
                Alta de vendedor
                </button>
            </Link>
            <Link to="/perfil/vendedor">
                <button>
                Perfil de Vendedor
                </button>
            </Link>
            <Link to="/perfil/historial">
            <button>
               Historial de compras
            </button>
            </Link>
          </div> 
          </div>
          <div className={Container_text}>
          <div>
              Nombre: <h1>{userState?.name}</h1>
          </div>
          <div>
              Apellido: <h1>{userState?.lastname}</h1>
          </div>
          <div>
              Email: <h2>{userState?.email}</h2>
          </div>
          {userState?.address?(
          <div>
              País: <h2>{userState?.country}</h2>
              Provincia: <h2>{userState?.address?.province}</h2>
              Ciudad: <h2>{userState?.address?.city}</h2>
              Código Postal: <h2>{userState?.address?.postalcode}</h2>
              Calle: <h2>{userState?.address?.street}</h2>
              Número: <h2>{userState?.address?.number}</h2>
              {userState.address?.dpto?(<span>Departamento: 
                <h2>{userState?.address?.dpto?.floor}</h2>
                <h2>{userState?.address?.dpto?.number}</h2>
                </span>)
                :null}
          </div>)
          :null}
          <div>
              Tipo de usuario: <h2>{userState?.role}</h2>
          </div>
          <div className={Text_intereses}>
            intereses: 
              {perfil.interest?.map((e,i)=>
              <div className={Intereses_container} key={i}> 
            <h2>{e.name}</h2> 
              </div>)}
          </div>
          {userState?.registration_date&&(<div >
              registrado desde: 
              <h2>Año: {registered[0]}</h2>
              <h2>Mes: {registered[1]}</h2>
          </div>)}
          <div>
             télefono: <h2>{userState?.phone}</h2>
          </div>
          {userState?.credit_card?(<div>
             Número de Cuenta: <h2>{userState?.credit_card}</h2>
          </div>):null}
      </div>
        </div>
          <div className={Historial}>
            <h1>Historial de compras</h1>
              <div className={ItemsContainer}>
                  <div className={SingleProduct}>
                    <img src="http://http2.mlstatic.com/D_925115-MLA49795029155_042022-I.jpg" alt="producto" />
                    <h2>Aceite Motul 8100 X-Cess 5w40 X 5 Lts.</h2>
                    <h2>$8250</h2>
                    <h3>Entregado</h3>
                    <h3>Fecha de compra 23/2/22</h3>
                </div>
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