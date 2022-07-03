import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Chart as ChartJS, ArcElement,RadialLinearScale, Tooltip, Legend,CategoryScale,LinearScale,PointElement,LineElement,Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale,LinearScale, PointElement,LineElement,Title,Tooltip,Legend);

import {Container, Container_card, Container_Perfil,Container_text,Container_img_button,SingleProduct, Container_card1,Container_card2,Container_card3,Container_card4, Container_card5, PublicacionesContainer, Titles, Preguntas, PreguntasPreguntas, Container3y4 } from './SellerProfile.module.css'
import { useAuth0 } from "@auth0/auth0-react";
export default function SellerProfile() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading } = useAuth0();
    const data3 = {
      labels: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      datasets: [
        {
          label: 'Ventas',
          data: [12, 19, 43, 55, 62,73,24,73,84,60,15,46,2,3,77,34,32,56,2,35,6,13,45,123,34,100,20,45,56,84],
          borderColor: 'rgb(3, 249, 60)',
          backgroundColor: 'rgba(248, 248, 248, 0.5)',
        },
      ],
    };
  
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
  <button onClick={() => navigate(-1)}>
    Atras
  </button>
  <h1 className={Titles}>Perfil de Vendedor:</h1>
    { isAuthenticated? 
    (<div className={Container_card}>
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
             <h1> nombre: {user.name}</h1>
             <h2> Email: {user.email}</h2>
             <h2> dirección: {perfil.address}</h2>
             <h2> reputación: {perfil.reputation}</h2>
             <h2> status: {perfil.status}</h2>
             <h2> registrado desde: {perfil.register_date}</h2>
          </div>
      </div>
  </div>)
  :<div>inicie sesion</div>}
  <h1 className={Titles}>Publicaciones</h1>
  <div className={Container_card1}>
    <div className={PublicacionesContainer}>
      <div className={SingleProduct}>
        <img src="http://http2.mlstatic.com/D_925115-MLA49795029155_042022-I.jpg" alt="producto" />
      <h2>Aceite Motul 8100 X-Cess 5w40 X 5 Lts.</h2>
      <h2>Stock Disponible <span>50</span></h2>
      <h2>$8250</h2>
      <h3>450 visitas</h3>
      <h3>43 vendidos</h3>
      </div>
      <hr/>
      <div className={SingleProduct}>
      <img src="http://http2.mlstatic.com/D_833619-MLA48233725917_112021-I.jpg" alt="producto" />
      
      <h2>Motorola Edge 20 Lite 128 Gb Gris 6 Gb Ram</h2>
      <h2>Stock Disponible <span>720</span></h2>
      <h2>$69999</h2>
      <h3>100visitas</h3>
      <h3>20 vendidos</h3>
      </div>
      <hr/>
      <div className={SingleProduct}>
      <img src="https://http2.mlstatic.com/D_888312-MLA42845999224_072020-O.jpg" alt="producto" />
      
      <h2>Pc Gamer Armada Intel I5 10400 8gb M2 480 Core X6 Thread X12</h2>
      <h2>Stock Disponible <span>1</span></h2>
      <h2>$70000</h2>
      <h3>434 visitas</h3>
      <h3>0 vendidos</h3>
      </div>
      <hr/>
      <div className={SingleProduct}>
        <img src="https://http2.mlstatic.com/D_900024-MLA43302667393_082020-O.jpg" alt="producto" />
        <h2>Kit Destornillador Celular IPhone Mac Samsung Tablet Iman</h2>
        <h2>Stock Disponible <span>25</span></h2>
        <h2>$10000</h2>
        <h3>600 visitas</h3>
        <h3>15 vendidos</h3>
      </div>
      <hr/>
      <div className={SingleProduct}>
        <img src="https://http2.mlstatic.com/D_936232-MLA46164931653_052021-O.jpg" alt="producto" />
        <h2>Xiaomi Mi Smart Band 6 1.56 Caja De Plástico Pc Black</h2>
        <h2>Stock Disponible <span>18</span></h2>
        <h2>$5400</h2>
        <h3>4200 visitas</h3>
        <h3>150 vendidos</h3>
      </div>
    </div>
    <div className={Container_card2}>
      <h2>ventas en los ultimos 30 días</h2><Line data={data3}/>
    </div>
  </div>
  <h1 className={Titles}>Pendientes</h1>
  <div className={Container3y4}>
    <div className={Container_card3}>
      <h1>Preguntas pendientes de responder</h1>
      <hr />
      <div className={PreguntasPreguntas}>
        <div className={Preguntas}>
          <h2>Aceite Motul 8100 X-Cess 5w40 X 5 Lts.</h2>
          <h2>$8250</h2>
        </div>
        <h3>Hola, te sirven 3 enanos? gracias</h3>
      </div>
      <hr/>
      <div className={PreguntasPreguntas}>
        <div className={Preguntas}>
          <h2>Enano bostero para asados</h2>
          <h2>$95000</h2>
        </div>
        <h3>aguante bokita</h3>
      </div>
      <hr/>
      <div className={PreguntasPreguntas}>
        <div className={Preguntas}>
          <h2>Enano para fiesta</h2>
          <h2>$2</h2>
        </div>
        <h3>Hola, te sirve un ford ka? gracias</h3>
      </div>
      <hr/>
    </div>
    <div className={Container_card4}>
      <h1>Ventas para despachar</h1>
      <h2>No tenés ventas por preparar</h2>
    </div>
  </div>
  <div className={Container_card5}></div>
</div>
  )
}