import React from 'react'
import { widthInput} from './PriceFilter.module.css'
import { setMaxMinPrice } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function PriceFilter() {
  const maxMinPrice = useSelector(state => state.productReducer.maxMinPrice)
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    dispatch(setMaxMinPrice({
        ... maxMinPrice,[e.target.name]: e.target.value
    }))
  }
  return (
    <div>
        <h6>Máximo </h6>
        <div >    
            <div class="input-group mb-3" >
                <span class="input-group-text">$</span>
                <input value = {maxMinPrice.max} 
                className = {widthInput} 
                onChange= {(e)=>handleOnChange(e)}
                name = "max"
                type = "number" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span class="input-group-text">.00</span>
            </div>
        </div>
         <h6>Mínimo </h6>
         <div  >
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input value= {maxMinPrice.min} 
                className = {widthInput}
                onChange = {(e)=>handleOnChange(e)} 
                name = "min"
                type="number" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span class="input-group-text">.00</span>
            </div>
         </div>
    </div>
  )
}
