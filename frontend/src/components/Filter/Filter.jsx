import { useSelector, useDispatch } from 'react-redux'
import { subtitle, container, categoryItem } from './Filter.module.css'
import { getProductByCategory, setActive } from '../../redux/actions'
import { useState, useEffect } from 'react'
import { scrollToProducts } from '../variablesGlobales'
// import { useEffect } from 'react'

const Filter = (props) => {
    
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const handleOnSelectCategory = (e) => {
        dispatch(setActive(1))
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
                                ({category.count||0})
                            </a>
                        </div>
                    )
                })}
            </span>
        </div>
    );
}

export default Filter