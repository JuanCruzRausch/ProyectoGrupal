import React from 'react'
import { Chart as ChartJS, ArcElement,RadialLinearScale, Tooltip, Legend,CategoryScale,LinearScale,PointElement,LineElement,Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { PolarArea } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import arrow from '../../assets/img/leftarrow.png';
import {Container, DashboardDiv,CurrentData,CurrentData1, CurrentData2,CurrentData3,CurrentData4, CurrentBars} from './Dashboard.module.css'
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale,LinearScale, PointElement,LineElement,Title,Tooltip,Legend);

function Dashboard() {
  const data3 = {
    labels: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 43, 55, 62,73,24,73,84,60,15,46,2,3,77,34,32,56,2,35,6,13,45,123,34,100,20,45,56,84],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  const data2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const data = {
    labels: ['Celulares', 'Maquillaje', 'Bebidas', 'Alimentos', 'Tablets'],
    datasets: [
      {
        label: 'Ventas En Las Ultimas 24 Hs',
        data: [12, 19, 33, 5, 23],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className={Container}>
      <div className={Detail_Links}>
        <img src={arrow} alt="back" />
        <Link to="/perfil">
          <h2>Atras</h2>
        </Link>
      </div>
      <div className={DashboardDiv}>
        <h1>Dashboard para controlar el rendimiento de los enanitos</h1>
        <hr/>
        <div className={CurrentData}>
          <div className={CurrentData1}>
            <h1>1425</h1>
            <h3>nuevos usuarios</h3>
          </div>
          <div className={CurrentData2}>
            <h1>390</h1>
            <h3>Usuarios Activos</h3>
          </div>
          <div className={CurrentData3}>
            <h1>400</h1>
            <h3>Ventas</h3>
            <h3>(ultima semana)</h3>
          </div>
          <div className={CurrentData4}> 
            <h1>352</h1>
            <h3>publicaciones activas</h3>
          </div>
        </div>
        <div className={CurrentBars}>
          <div><h2>ventas en las ultimas 24 hs</h2><Pie data={data} /></div>
          <div><h2>ventas en los ultimos 30 días</h2><Line data={data3}/></div>
        </div>
        <div className={CurrentBars}>
          <div><PolarArea data={data2}/></div>
          <div></div>
        </div>
        <div>
          <h1>Sistema de reportes</h1>
        </div>
        <div>
          <h1>Consultas/Servicio al cliente</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard