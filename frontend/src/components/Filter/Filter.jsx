import { useSelector, useDispatch } from 'react-redux';
import { subtitle, container, categoryItem } from './Filter.module.css';
import { getProductBy,setActive } from '../../redux/actions';
import PriceFilter from '../PriceFilter/PriceFilter';
const Filter = (props) => {

  const category = useSelector((state)=> state.productReducer.category)
  const sort = useSelector((state)=> state.productReducer.sort)
  const categories = useSelector((state) => state.productReducer.Categories);
  const {max, min} = useSelector((state) => state.productReducer.maxMinPrice)
  const dispatch = useDispatch();
  const handleOnSelectCategory = async(e, categoryName) => {
    
    dispatch(setActive(1));
    e.preventDefault();
    props.scrollTo();
    const cat = categories.find(cat => cat.name===categoryName)
    setCategory(cat._id)
    let sortToSend
    sort==="A-Z"&&(sortToSend = "title")
    sort==="Z-A"&&(sortToSend = "-title")
    sort==="Mayor Precio"&&(sortToSend = "-price")
    sort==="Menor Precio"&&(sortToSend = "price")
    dispatch(getProductBy(cat._id, min, max, sortToSend ));
  };

    const setCategory = (data) =>{
      dispatch({type: "SET_CATEGORY", payload: data})
    }

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
