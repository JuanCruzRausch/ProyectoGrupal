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
       
        dispatch(getTransaction(queries))
        navigate("/")
},[])
navigate("/")

  return (
    <div>
        <button onClick={() => navigate("/")}>
          Regresar 
        </button>
    </div>
  )
}
