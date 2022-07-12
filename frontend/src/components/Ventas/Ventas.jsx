import React from 'react'
import { container } from './Ventas.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSales } from '../../redux/actions/userAction'
import { Table }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Ventas() {
  const sales = useSelector(state => state.userReducer.sales)
  const seller = useSelector(state => state.userReducer.seller)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSales(seller?._id))
  },[user])
    return (
    <div className={container}>
        <Table>

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
                 {sales?.map(sale =>(
                     <tr>
                        <td>{sale?._id}</td>
                        <Link to={`/products/${sale?.transaction?.publication?._id}`}><td >{sale?.transaction?.publication?.title}</td></Link>
                        <td>{sale?.transaction?.publication?.price}</td>
                        <td>{sale?.transaction?.quantity}</td>
                        <td>{sale?.buyer?.name}</td>
                        <td>{sale?.transaction?.earnings?.seller_earnings}</td>
                        <td>{sale?.transaction?.status}</td>
                        <td>{sale?.dateOfBuy?.substring(0, 10)}</td>
                    </tr>
                 ))}   
                
            
            </tbody>
        </Table>
    </div>
  )
}
