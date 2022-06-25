import React from 'react'
import {Container} from './Perfil.module.css'
export default function Perfil() {
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
        <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="perfil-img"/>
        <div>
            nombre: {perfil.nombre}
        </div>
        <div>
            Email: {perfil.email}
        </div>
        <div>
            dirección: {perfil.address}
        </div>
        <div>
            reputación: {perfil.reputation}
        </div>
        <div>
            status: {perfil.status}
        </div>
        <div>
            intereses:
            {perfil.interest?.map((e,i)=><div key={i}> {e.name} </div>)}
        </div>
        <div>
            registrado desde: {perfil.register_date}
        </div>
        <div>
            transacciones: 
            <div>
                {perfil.transactions.completed}
            </div>
            <div>
                {perfil.transactions.canceled}
            </div>
            <div>
                {perfil.transactions.total}
            </div>
        </div>
    </div>
  )
}
