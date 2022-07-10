import React, { useEffect } from 'react'
import swal from 'sweetalert'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTransaction } from '../../redux/actions/InteractionsActions'
import { ClearFromCart } from '../../redux/actions/CartActions'

export default function Transaction () {
    const dispatch = useDispatch()
    const queries = useLocation().search
    const navigate = useNavigate()
    const dispatch = useDispatch
useEffect(()=>{
        swal({
          title: `transacción exitosa`,
          icon: "success",
        });
        
        dispatch(getTransaction(queries))
        navigate("/")
        dispatch(ClearFromCart())
},[])
  return (
    <div>
        
    </div>
  )
}
