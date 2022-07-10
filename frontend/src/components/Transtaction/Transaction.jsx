import React, { useEffect } from 'react'
import swal from 'sweetalert'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTransaction } from '../../redux/actions/InteractionsActions'
export default function Transaction () {
    const {queries} = useParams()
    const navigate = useNavigate()
useEffect(()=>{
        swal({
          title: `transacción exitosa`,
          icon: "success",
        });
        dispatch(getTransaction(queries))
        navigate("/")
},[])
  return (
    <div>
        
    </div>
  )
}
