import { useSelector, useDispatch } from 'react-redux';
import { subtitle, container, categoryItem } from './Filter.module.css';
import { getProductByCategory, ProductPerCategory, setActive } from '../../redux/actions';
import PriceFilter from '../PriceFilter/PriceFilter';
import { useEffect } from 'react';
// import { useEffect } from 'react'

const Filter = (props) => {

  const categories = useSelector((state) => state.productReducer.Categories);
  const productos = useSelector((state) => state.productReducer.Allproduct)
  const dispatch = useDispatch();
  const handleOnSelectCategory = (e, categoryName) => {
    dispatch(setActive(1));
    e.preventDefault();
    props.scrollTo();
    dispatch(getProductByCategory(categoryName));
  };

    useEffect(()=> {
      categories.forEach((category) => {
        dispatch(ProductPerCategory(category.name._id))
      });
    }, [])

  return (
    <div className={container}>
      <span>
        <div className={subtitle}>Precio</div>
        <PriceFilter/>

        {/* categorias */}
        <div className={subtitle}>Categorías</div>
        {categories?.map((category) => {
          return (
            <div className={categoryItem} key={category.name.id}>
              <a
                onClick={(e) => handleOnSelectCategory(e, category.name.name)}
                href="#"
              >
                {category.name.name} ({category.count || 0})
              </a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Filter;
