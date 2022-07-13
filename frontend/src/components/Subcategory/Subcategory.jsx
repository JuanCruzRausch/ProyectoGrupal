import {container} from "./Subcategory.module.css"
import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'

export default function Subcategory() {
const categories = useSelector(state => state.productReducer.allCategories)
const category = useSelector(state => state.productReducer.category)
const [categoryFound, setCategoryFound ]= React.useState({})
const products = useSelector(state => state.productReducer.allProductCache)
const dispatch = useDispatch()

const subcategory = (e, subcat) => {
  e.preventDefault()
  const productSubcat =  products.filter(product => product.subCategory === subcat)
  dispatch({type: "GET_PRODUCT", payload: [...productSubcat]})
}
React.useEffect(()=>{
  setCategoryFound({...categories?.find((cat => cat._id === category))})
},[category, categories])

  return (
    <div className={container}>
      <h1>{categoryFound?.name}</h1>
      {categoryFound?.subcategories?.map(subcat=>(
  
        <div key={subcat._id}>
          <a href="#" onClick={e=> subcategory(e, subcat._id)}>{subcat?.name}</a>
        </div>
  
      ))}
    </div>
  )
}
