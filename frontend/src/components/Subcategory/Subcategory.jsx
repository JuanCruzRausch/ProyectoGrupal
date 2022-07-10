import {container} from "./Subcategory.module.css"
import React from 'react'
import { useSelector } from "react-redux"


export default function Subcategory() {
const categories = useSelector(state => state.productReducer.Categories)
const category = useSelector(state => state.productReducer.category)
const [categoryFound, setCategoryFound ]= React.useState({})


const subcategory = (e) => {
  e.preventDefault()
}
React.useEffect(()=>{
  setCategoryFound({...categories?.find((cat => cat._id === category))})
},[category, categories])

  return (
    <div className={container}>
      <h1>{categoryFound?.name}</h1>
      {categoryFound?.subcategories?.map(subcat=>(
  
        <div key={subcat._id}>
          <a href="#" onClick={e=> subcategory(e)}>{subcat?.name}</a>
        </div>
  
      ))}
    </div>
  )
}
