import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  deleteProduct,
  inactivePublication,
  activePublication,
} from '../../redux/actions/index';
import { salesLastWeek } from '../../redux/actions/userAction'
import swal from 'sweetalert';
import { useEffect } from 'react';
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
} from 'chart.js';
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import arrow from '../../assets/img/leftarrow.png';
import { useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
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
  PublicacionesContainer,
  Titles,
  EmptyPub,
  Login,
} from './SellerProfile.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth0/login';
import { Helmet } from 'react-helmet-async';
import LogoutButton from '../Auth0/logout';

export default function SellerProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastWeek = useSelector((state) => state.userReducer.lastWeek)
  const seller = useSelector((state) => state.userReducer.seller);
  const userState = useSelector((state) => state.userReducer.user);
  const SellerState = useSelector((state) => state.userReducer.seller);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(salesLastWeek(SellerState?._id))
  },[SellerState])

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState({labels:[], datasets:[]})
  
  useEffect(()=>{
    setData({
      labels: lastWeek?.days,
      datasets: [
        {
          label: 'Ventas',
          data: lastWeek?.sales,
          borderColor: 'rgb(3, 249, 60)',
          backgroundColor: 'rgba(248, 248, 248, 0.5)',
        },
      ],
    })
  },[lastWeek])
  
  // const data = {
  //   labels: lastWeek?.days,
  //   datasets: [
  //     {
  //       label: 'Ventas',
  //       data: lastWeek?.sales,
  //       borderColor: 'rgb(3, 249, 60)',
  //       backgroundColor: 'rgba(248, 248, 248, 0.5)',
  //     },
  //   ],
  // };

  const deletePublication = (productId) => {
    swal({
      title: 'Desea eliminar el producto?',
      text: 'Una vez eliminado, no podra recuperarse',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('El producto fue eliminado', {
          icon: 'success',
        });
        dispatch(deleteProduct(productId, userState._id));
      } else {
        swal('El producto no fue eliminado');
      }
    });
  };
  const desactivarPublication = (productId) => {
    dispatch(inactivePublication(productId, userState._id));
  };

  const showPublication = (productId) => {
    dispatch(activePublication(productId, userState._id));
  };
  console.log(SellerState);
  return (
    <div>
      <Helmet>
        <title> ML7E </title>
      </Helmet>
      <div className={Container}>
        <div className={Detail_Links}>
          <img src={arrow} alt="back" />
          <Link to="/perfil">
            <h2>Atras</h2>
          </Link>
        </div>
        {isAuthenticated ? (
          <div>
            <h1 className={Titles}>
              Saldo: US$ {SellerState?.total_earnings?.toFixed(2)}
            </h1>
            {/* {isAuthenticated ? (<h1 className={Titles}>Perfil de Vendedor:</h1>) : null} */}
            {isAuthenticated ? (
              <div className={Container_card}>
                <div className={Container_Perfil}>
                  <div className={Container_img_button}>
                    <img src={userState?.photo} alt="perfil-img" />
                    <Link to="/perfil/ventas">
                        <button>Historial de Ventas</button>
                    </Link>
                    <LogoutButton />
                  </div>
                    <div className={Container_text}>
                      <h2>
                        Publicaciones activas: {SellerState?.active_pub?.length}
                      </h2>
                      <h2>Marca: {SellerState?.brand}</h2>
                      <h2></h2>
                      <h2></h2>
                    </div>
                    <div>
                      <h1>Nombre: {userState?.name}</h1>
                      <h2> Email: {userState?.email}</h2>
                      <h2> Ciudad: {userState?.address?.city}</h2>
                      <h2>
                        {' '}
                        Registrado desde:{' '}
                        {userState?.registration_date.substring(0, 10)}
                      </h2>
                    </div>
                    <div>
                      Transacciones:
                      <div>
                        <h3>
                          Completadas:{' '}
                          {SellerState?.transactionsTotal?.completed}
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Canceladas: {SellerState?.transactionsTotal?.canceled}
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Totales: {SellerState?.transactionsTotal?.total}
                        </h3>
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
{                seller?.active_pub?.length > 0 ? seller?.active_pub?.map((product) => (
                  <div key={product._id}>
                    <div className={SingleProduct}>
                      <img
                        src={
                          product?.pictures?.length > 0
                            ? product?.pictures[0]
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAyavuNov5sCvf5ryQrCGBHDVUJEz8VCMVA&usqp=CAU'
                        }
                        alt={product?.title}
                      />
                      <h2>{product?.title}</h2>
                      <h2>
                        Stock Disponible{'  '}
                        <span>
                          {product?.stock?.stockTotal}
                        </span>
                      </h2>
                      <h2>${product?.price}</h2>
                      <h3>Vendidos:{product?.totalSold}</h3>
                      <button
                        onClick={() => desactivarPublication(product._id)}
                      >
                        X
                      </button>
                    </div>
                    <hr />
                  </div>
                ))
              : <div className={EmptyPub}>
                  <h1>No tienes publicaciones activas</h1>
                  <h2>Deseas <span> <Link to="/publicar"> crear una? </Link></span></h2>
                </div>
              }
              </div>
              <div className={Container_card2}>
                <h2>Ventas del Mes</h2>
                <Line data={data} />
              </div>
            </div>
            <h1 className={Titles}>Publicaciones eliminadas</h1>
            <div className={Container_card1}>
              <div className={PublicacionesContainer}>
                {
                  seller?.inactive_pub?.length > 0 ?
                  seller?.inactive_pub?.map((product) => (
                    <div key={product._id}>
                      <div className={SingleProduct}>
                        <img
                          src={
                            product?.pictures?.length > 0
                              ? product?.pictures[0]
                              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAyavuNov5sCvf5ryQrCGBHDVUJEz8VCMVA&usqp=CAU'
                          }
                          alt={product?.title}
                        />
                        <h2>{product?.title}</h2>
                        <h2>
                          Stock Disponible{' '}
                          <span>
                            {Number(product?.stock?.stockTotal) -
                              (product?.totalsold
                                ? Number(product.totalsold)
                                : 0)}
                          </span>
                        </h2>
                        <h2>${product?.price}</h2>
                        <h3>
                          Vendidos:{product?.totalsold ? product.totalsold : 0}
                        </h3>
                        <button onClick={() => showPublication(product._id)}>
                          mostrar
                        </button>
                      </div>
                      <hr />
                    </div>
                  ))
                  :
                <div className={EmptyPub}>
                    <h2>
                       No tienes publicaciones eliminadas
                    </h2>
                </div>
                }
              </div>
            </div>
            </div>
        ) : (
          <div className={Login}>
            <LoginButton />
          </div>
        )}

      </div>
    </div>
  );
}
