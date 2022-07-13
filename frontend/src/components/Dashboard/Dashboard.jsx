import React, { useEffect } from 'react'
import { Chart as ChartJS, ArcElement,RadialLinearScale, Tooltip, Legend,CategoryScale,LinearScale,PointElement,LineElement,Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { PolarArea } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { getCategoriesStats } from '../../redux/actions';
import arrow from '../../assets/img/leftarrow.png';
import { useDispatch, useSelector } from 'react-redux'
import {Container, DashboardDiv,CurrentData,CurrentData1, CurrentData2,CurrentData3,CurrentData4, CurrentBars, users} from './Dashboard.module.css'
import { getAdminData } from '../../redux/actions/adminAction'
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale,LinearScale, PointElement,LineElement,Title,Tooltip,Legend);

function Dashboard() {
  const dispatch = useDispatch()
  const [data, setData] = React.useState({
    label:[],
    datasets:[]
  })
  const categories = useSelector(state => state.productReducer.categories)
  const adminData = useSelector(state => state.adminReducer.adminData)
  useEffect(()=>{
    dispatch( getAdminData() )
    dispatch( getCategoriesStats() )
  },[])

  useEffect(()=>{
    setData({
      labels: categories.map(category => category.name),
      datasets: [...[],{
        label: "Publicaciones por Categorías",
        data: categories.map(category => category.quantity),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(235, 99, 132, 1)',
                  'rgba(5, 142, 235, 1)',
                  'rgba(215, 186, 86, 1)',
                  'rgba(35, 172, 192, 1)',
                  'rgba(103, 82, 255, 1)',
                  'rgba(205, 129, 64, 1)',
                  'rgba(200, 69, 132, 1)',
                  'rgba(34, 132, 235, 1)',
                ],
        borderWidth: 1,
      }]
    })
  },[categories])
  console.log(data)
  // const data3 = {
  //   labels: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  //   datasets: [
  //     {
  //       label: 'Ventas',
  //       data: [12, 19, 43, 55, 62,73,24,73,84,60,15,46,2,3,77,34,32,56,2,35,6,13,45,123,34,100,20,45,56,84],
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //   ],
  // };
  
  // const data2 = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.5)',
  //         'rgba(54, 162, 235, 0.5)',
  //         'rgba(255, 206, 86, 0.5)',
  //         'rgba(75, 192, 192, 0.5)',
  //         'rgba(153, 102, 255, 0.5)',
  //         'rgba(255, 159, 64, 0.5)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  
  // const data = {
  //   labels: ['Celulares', 'Maquillaje', 'Bebidas', 'Alimentos', 'Tablets'],
  //   datasets: [
  //     {
  //       label: 'Ventas En Las Ultimas 24 Hs',
  //       data: [12, 19, 33, 5, 23],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  
  return (
    <div >
     
      <div className={Detail_Links}>
        <img src={arrow} alt="back" />
        <Link to="/perfil">
          <h2>Atras</h2>
        </Link>
      </div>
      <div className={DashboardDiv}>
        <h1>Dashboard de Administración</h1>
        <hr/>
        <div className={CurrentData}>
          <div className={CurrentData1}>
            <h1>{adminData?.activeUsers}</h1>
            <h3>Usuarios Activos</h3>
          </div>
          <div className={CurrentData2}>
            <h1>{adminData?.deletedUsers}</h1>
            <h3>Usuarios Eliminados</h3>
          </div>
          <div className={CurrentData3}>
            <h1>{adminData?.transactions}</h1>
            <h3>Transacciones Totales</h3>
          </div>
          <div className={CurrentData4}> 
            <h1>{adminData?.activePubs}</h1>
            <h3>Publicaciones Activas</h3>
          </div>
        </div>
          <br />
          <div className={CurrentData}>
            <div className={CurrentData1}>
              <h1>{adminData?.inactivePubs}</h1>
              <h3>Publicaciones Inactivas</h3>
            </div>
            <div className={CurrentData2}>
              <h1>{adminData?.totalPubs}</h1>
              <h3>Total de Publicacionees</h3>
            </div>
            <div className={CurrentData3}>
              <h1>{adminData?.sellers}</h1>
              <h3>Vendedores Totales</h3>
            </div>
            <div className={CurrentData4}> 
              <h1>{adminData?.deletedSellers}</h1>
              <h3>vendedores eliminados</h3>
            </div>
          </div>

          <br />
        <div className={CurrentBars}>
          <div><h2>Publicaciones por Categoría</h2><Pie data={data} /></div>
          {/* <div><h2>ventas en los ultimos 30 días</h2><Line data={data3}/></div> */}
        </div>
        {/* <div className={CurrentBars}>
          <div><PolarArea data={data2}/></div>
          <div></div>
        </div> */}
        <div>
          <h1>Sistema de reportes</h1>
        </div>
        <div>
          <h1>Consultas/Servicio al cliente</h1>
        </div>
      </div>
      <div className={users}>
        <Link to = "/admin/userlist">
          <button className='button btn-success'>Buscar Usuarios</button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard