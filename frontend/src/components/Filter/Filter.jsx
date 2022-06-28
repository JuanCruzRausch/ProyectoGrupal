import { useSelector, useDispatch } from 'react-redux';
import { subtitle, container, categoryItem } from './Filter.module.css';
import { getProductByCategory, setActive } from '../../redux/actions';
import PriceFilter from '../PriceFilter/PriceFilter';
// import { useEffect } from 'react'

const Filter = (props) => {
  const categories = useSelector((state) => state.productReducer.categories);
  const dispatch = useDispatch();
  const handleOnSelectCategory = (e, categoryName) => {
    dispatch(setActive(1));
    e.preventDefault();
    props.scrollTo();
    dispatch(getProductByCategory(categoryName));
  };

  return (
    <div className={container}>
      <span>
        <div className={subtitle}>Precio</div>
        <PriceFilter/>

        {/* categorias */}
        <div className={subtitle}>categorías</div>
        {categories.map((category) => {
          return (
            <div className={categoryItem} key={category.id}>
              <a
                onClick={(e) => handleOnSelectCategory(e, category.name)}
                href="#"
              >
                {category.name} ({category.count || 0})
              </a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Filter;
