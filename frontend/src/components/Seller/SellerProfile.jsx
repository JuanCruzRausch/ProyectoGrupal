import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/index"
import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Detail_Links } from "../PerfilEditar/PerfilEditar.module.css";
import arrow from "../../assets/img/leftarrow.png";
import { Line } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import {
  Container,
  Container_card,
  Container_Perfil,
  Container_text,
  Container_img_button,
  SingleProduct,
  Container_card1,
  Container_card2,
  Container_card3,
  Container_card4,
  Container_card5,
  PublicacionesContainer,
  Titles,
  Preguntas,
  PreguntasPreguntas,
  Container3y4,
  Login,
} from "./SellerProfile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth0/login";
export default function SellerProfile() {
  const myProducts = useSelector(
    (state) => state.productReducer.publicationSeller
  );
  const userState = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const data3 = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        label: "Ventas",
        data: [
          12, 19, 43, 55, 62, 73, 24, 73, 84, 60, 15, 46, 2, 3, 77, 34, 32, 56,
          2, 35, 6, 13, 45, 123, 34, 100, 20, 45, 56, 84,
        ],
        borderColor: "rgb(3, 249, 60)",
        backgroundColor: "rgba(248, 248, 248, 0.5)",
      },
    ],
  };

  const perfil = {
    nombre: "Juanito Perez",
    email: "juanito312@gmail.com",
    photo:
      "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
    address: "calle 76 # 35 - 22",
    reputation: 5,
    status: "platinium",
    register_date: "20/06/2020",
    interest: [
      {
        id: "MLA1367",
        name: "Antigüedades y Colecciones",
      },
      {
        id: "MLA1368",
        name: "Arte, Librería y Mercería",
      },
      {
        id: "MLA1743",
        name: "Autos, Motos y Otros",
      },
    ],
    transactions: {
      completed: 4,
      canceled: 2,
      total: 9,
    },
  };

  return (
    <div className={Container}>
      <div className={Detail_Links}>
        <img src={arrow} alt="back" />
        <Link to="/perfil">
          <h2>Atras</h2>
        </Link>
      </div>
      {isAuthenticated ? (
        <div>
          <h1 className={Titles}>Perfil de Vendedor:</h1>
          {isAuthenticated ? (
            <div className={Container_card}>
              <div className={Container_Perfil}>
                <div className={Container_img_button}>
                  <img src={userState?.photo} alt="perfil-img" />
                  <Link to="/perfil/editar">
                    <button>Editar perfil</button>
                  </Link>
                </div>
                <div className={Container_text}>
                  <h1> nombre: {user.name}</h1>
                  <h2> Email: {user.email}</h2>
                  <h2> dirección: {perfil.address}</h2>
                  <h2> reputación: {perfil.reputation}</h2>
                  <h2> status: {perfil.status}</h2>
                  <h2> registrado desde: {perfil.register_date}</h2>
                  <div>
                    transacciones:
                    <div>
                      <div>
                        <h3>completadas: {perfil.transactions.completed}</h3>
                      </div>
                      <div>
                        <h3>canceladas: {perfil.transactions.canceled}</h3>
                      </div>
                      <div>
                        <h3>totales: {perfil.transactions.total}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>inicie sesion</div>
          )}
          <h1 className={Titles}>Publicaciones</h1>
          <div className={Container_card1}>
            <div className={PublicacionesContainer}>
              {myProducts?.map(product => (
                 <div key={product._id}>
                  <div className={SingleProduct}>
                    <img src={product?.pictures?.length>0?product?.pictures[0]:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAyavuNov5sCvf5ryQrCGBHDVUJEz8VCMVA&usqp=CAU"} alt={product?.title} />
                    <h2>{product?.title}</h2>
                    <h2>Stock Disponible <span>{(Number(product?.stock?.stockTotal))-(product?.totalsold? Number(product.totalsold): 0)}</span></h2>
                    <h2>${product?.price}</h2>
                    <h3>Vendidos:{product?.totalsold? product.totalsold: 0}</h3>
                    <button onClick={()=>deleteProduct(product._id, userState._id)}>X</button>
                  </div>
                  <hr />
                 </div>

              ))}
              

            </div>
            <div className={Container_card2}>
              <h2>ventas en los ultimos 30 días</h2>
              <Line data={data3} />
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
                <h3>Hola, tenes stock? gracias</h3>
              </div>
              <hr />
              <div className={PreguntasPreguntas}>
                <div className={Preguntas}>
                  <h2>Xiaomi Mi Smart Band 6 1.56 Caja De Plástico Pc Black</h2>
                  <h2>$5400</h2>
                </div>
                <h3>se puede jugar al fortnite?</h3>
              </div>
              <hr />
              <div className={PreguntasPreguntas}>
                <div className={Preguntas}>
                  <h2>Escultura de enano de blancanieves </h2>
                  <h2>$2500</h2>
                </div>
                <h3>Hola, cuantos enanos vienen? gracias</h3>
              </div>
              <hr />
            </div>
            <div className={Container_card4}>
              <h1>Ventas para despachar</h1>
              <h2>No tenés ventas por preparar</h2>
            </div>
          </div>
          <div className={Container_card5}></div>
        </div>
      ) : (
        <div className={Login}>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
