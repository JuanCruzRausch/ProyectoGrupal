import React from 'react';
import { container } from './Ventas.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSales } from '../../redux/actions/userAction';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/img/leftarrow.png';
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { DetailDark } from '../Terms/TermsDark.module.css';
import { Helmet } from 'react-helmet-async';

export default function Ventas() {
  const navigate = useNavigate();
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  const sales = useSelector((state) => state.userReducer.sales);
  const seller = useSelector((state) => state.userReducer.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSales(seller?._id));
  }, [seller]);
  
  return (
    <div>
      <Helmet>
        <title> ML7E Ventas</title>
      </Helmet>
      <div className={container}>
        <div className={isdarkMode ? DetailDark : Detail_Links}>
          <img src={arrow} alt="back" />
          <a onClick={() => navigate(-1)}>
            <h2>Atras</h2>
          </a>
        </div>
        <Table
          striped
          bordered
          hover
          variant={isdarkMode ? 'dark' : 'light'}
          responsive="sm"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>COMPRADOR</th>
              <th>GANANCIA</th>
              <th>STATUS</th>
              <th>FECHA</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale) => (
              <tr>
                <td>{sale?._id}</td>
                <td>
                  <Link to={`/products/${sale?.transaction?.publication?._id}`}>
                    {sale?.transaction?.publication?.title}
                  </Link>
                </td>
                <td>US$ {sale?.transaction?.publication?.price}</td>
                <td>{sale?.transaction?.quantity}</td>
                <td>{sale?.buyer?.name}</td>
                <td>
                  US$ {sale?.transaction?.earnings?.seller_earnings.toFixed(2)}
                </td>
                <td>
                  {sale?.transaction?.status === 'pending'
                    ? 'pendiente'
                    : 'completado/rechazado'}
                </td>

                <td>{sale?.dateOfBuy?.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
