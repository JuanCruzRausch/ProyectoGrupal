import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Container_card, Container_Perfil,Container_text,Text_transacciones, Text_completed, Text_canceled, Text_total, Text_intereses, Intereses_container,Container_img_button} from './Perfil.module.css'
import { useAuth0 } from "@auth0/auth0-react";
export default function Perfil() {

  const { user, isAuthenticated, isLoading } = useAuth0();
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
    { isAuthenticated? (<div className={Container_card}>
          <div className={Container_Perfil}>
          <div className={Container_img_button}>
          <img src={user.picture} alt="perfil-img"/>
          <Link to="/perfil/editar">
              <button>
              Editar perfil
              </button>
          </Link>
          </div>
          <div className={Container_text}>
          <div>
              nombre: <h1>{user.name}</h1>
          </div>
          <div>
              Email: <h2>{user.email}</h2>
          </div>
          <div>
              dirección: <h2>{perfil.address}</h2>
          </div>
          <div>
              reputación: <h2>{perfil.reputation}</h2>
          </div>
          <div>
              status: <h2>{perfil.status}</h2>
          </div>
          <div className={Text_intereses}>
            intereses: 
              {perfil.interest?.map((e,i)=>
              <div className={Intereses_container} key={i}> 
            <h2>{e.name}</h2> 
              </div>)}
          </div>
          <div >
              registrado desde: <h2>{perfil.register_date}</h2>
          </div>
          <div className={Text_transacciones}>
              transacciones: 
              <div>
              <div>
                <h3 className={Text_completed}>completadas: {perfil.transactions.completed}</h3>
              </div>
              <div>
                <h3 className={Text_canceled}>canceladas:  {perfil.transactions.canceled}</h3>
              </div>
              <div>
                <h3 className={Text_total}>totales: {perfil.transactions.total}</h3>
              </div>
              </div>
          </div>
      </div>
      </div>
  </div>)
  :<div>inicie sesion</div>}
</div>
  )
}
