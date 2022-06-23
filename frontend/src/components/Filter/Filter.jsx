import { useSelector, useDispatch } from 'react-redux'
import { subtitle, container } from './Filter.module.css'
import { getProductByCategory } from '../../redux/actions'
// import { useEffect } from 'react'

const Filter = (props) => {

    let categories = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const products = useSelector(state=>state.Allproduct)

    // useEffect(()=>{
        
    //     categories.forEach(category=>{
    //         products.forEach((product, i) => {
    //             if(product.category === category.name){
    //                 categories[i].count++
    //             }
    //         });
    //     })
    // },[])

    
    const handleOnSelectCategory = (e) => {
        e.preventDefault()
        console.log(e.target.innerText)
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
                        <div key={category.id}>
                            <a onClick={(e)=>handleOnSelectCategory(e)} href='#'>
                                {category.name}
                            </a>
                            <span>
                                {category.count}
                            </span>
                        </div>
                    )
                })}
            </span>
        </div>
    );
}

export default Filter