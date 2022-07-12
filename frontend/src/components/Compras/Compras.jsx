import React from 'react'
import { container } from './Compras.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPurchases } from '../../redux/actions/userAction'
import { Table }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Compras() {
  const purchases = useSelector(state => state.userReducer.purchases)
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPurchases(user?._id))
  },[])
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
                 {purchases?.map(purchase =>(
                     <tr>
                        <td>{purchase._id}</td>
                        <Link to={`/products/${purchase?.transaction?.publication?._id}`}><td >{purchase?.transaction?.publication?.title}</td></Link>
                        <td>{purchase?.publication?.price}</td>
                        <td>{purchase?.transaction?.quantity}</td>
                        <td>{purchase?.buyer?.name}</td>
                        <td>{purchase?.transaction?.earnings?.user_earnings}</td>
                        <td>{purchase?.transaction?.status}</td>
                        <td>{purchase?.dateOfBuy?.substring(0, 10)}</td>
                    </tr>
                 ))}   
                
            
            </tbody>
        </Table>
    </div>
  )
}
