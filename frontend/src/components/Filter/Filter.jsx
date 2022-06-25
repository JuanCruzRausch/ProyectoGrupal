import { useSelector, useDispatch } from 'react-redux'
import { subtitle, container, categoryItem } from './Filter.module.css'
import { getProductByCategory } from '../../redux/actions'
import { useState, useEffect } from 'react'
import { scrollToProducts } from '../variablesGlobales'
// import { useEffect } from 'react'

const Filter = (props) => {
    const [categories, setCategories] = useState([...(useSelector(state => state.categories)).map(category => {return {...category, count:0}})])
    const dispatch = useDispatch()
    const products = useSelector(state=>state.Allproduct)

    useEffect(()=>{
        let productCategory = [...categories]
        productCategory.forEach(category=>{
            products.forEach((product, i) => {
                if(product.category === category.name){
                   category.count+=1 
                }
            });
        })
        setCategories([...productCategory])
    },[])

    
    const handleOnSelectCategory = (e) => {
        e.preventDefault()
        props.scrollTo()
        dispatch(getProductByCategory(e.target.innerText))
      }
    
    return (
        <div className={container}>
            <span>
                <div className={subtitle}>
                    categorías
                </div>
                {categories.map(category => {
                    return (
                        <div className={categoryItem} key={category.id}>
                            <a onClick={(e)=>handleOnSelectCategory(e)} href='#'>
                                {category.name} 
                            </a>
                            <a onClick={(e)=>e.preventDefault()} href="#">
                                ({category.count})
                            </a>
                        </div>
                    )
                })}
            </span>
        </div>
    );
}

export default Filter