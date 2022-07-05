import { useSelector, useDispatch } from 'react-redux';
import { subtitle, container, categoryItem } from './Filter.module.css';
import { getProductByCategory, setActive } from '../../redux/actions';
import PriceFilter from '../PriceFilter/PriceFilter';
const Filter = (props) => {

  const categories = useSelector((state) => state.productReducer.Categories);
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
        <div className={subtitle}>Categorías</div>
        {categories?.map((category) => {
          return (
            <div className={categoryItem} key={category.id}>
              <a
                onClick={(e) => handleOnSelectCategory(e, category.name)}
                href="#"
              >
                {category.name||"subcategorías"} ({category.count || 0})
              </a>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Filter;
