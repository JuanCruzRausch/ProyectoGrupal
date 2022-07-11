import React, { useEffect } from 'react'
import swal from 'sweetalert'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction } from '../../redux/actions/InteractionsActions'

export default function Transaction () {
    const queries = useLocation().search
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const transaction = useSelector(state => state.interactionsReducer.transaction)
useEffect(()=>{
        swal({
          title: `transacción exitosa`,
          icon: "success",
        });
        dispatch(getTransaction(queries))
},[])
navigate("/")

  return (
    <div>
        
    </div>
  )
}
