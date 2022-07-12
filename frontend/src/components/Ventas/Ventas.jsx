import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSales } from '../../redux/actions/userAction'
export default function Ventas() {
//   const ventas = useSelector(state => state.userReducer.sales)
  const seller = useSelector(state => state.userReducer.seller)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSales(seller?._id))
  },[])
    return (
    <div>

    </div>
  )
}
