import React from 'react'
import { container } from './Compras.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPurchases, reject, arrived } from '../../redux/actions/userAction'
import { Table }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Compras() {
  const purchases = useSelector(state => state.userReducer.purchases)
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPurchases(user?._id))
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
                    <th>MARCA</th>
                    <th>STATUS</th>
                    <th>ACCIONES</th>
                    <th>FECHA</th>
                </tr>
                
            </thead>
            <tbody>
                 {purchases?.map(purchase =>(
                     <tr>
                        <td>{purchase._id}</td>
                        {purchase?.transaction?.publication?.title?<Link to={`/products/${purchase?.transaction?.publication?._id}`}><td >{purchase?.transaction?.publication?.title}</td></Link>:
                        <Link to={`/products/${purchase?.transaction?.publication?._id}`}><td >{purchase?.transaction?.publication?._id}</td></Link>}
                        <td>{purchase?.publication?.price}</td>
                        <td>{purchase?.transaction?.quantity}</td>
                        <td>{purchase?.transaction?.seller?.brand}</td>
                        <td>{purchase?.transaction?.status}</td>
                        <td>
                            {purchase?.transaction?.status==="pending"&&<button className="btn-success button" onClick={()=>dispatch(arrived(purchase._id))}>Confirmar</button>}
                            {purchase?.transaction?.status==="pending"&&<button className="btn-danger button" onClick={()=>dispatch(reject(purchase._id))}>Cancelar</button>}
                            {purchase?.transaction?.status==="fulfilled"&&<button className="btn-primary button" onClick={()=>{}}>Calificar</button>}
                        </td>
                        <td>{purchase?.dateOfBuy?.substring(0, 10)}</td>
                    </tr>
                 ))}   
            </tbody>
        </Table>
    </div>
  )
}
