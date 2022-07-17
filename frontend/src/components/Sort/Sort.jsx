import {  setActive, getProductBy } from '../../redux/actions/productAction';
import React, { useState, useEffect } from 'react';
import {Form, NavDropdown} from 'react-bootstrap';
import { SortContainer, SortDark, CATEGORIAS } from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux'
import PriceFilter from '../PriceFilter/PriceFilter';


const Sort = React.forwardRef((props, ref) => {
  const {max, min} = useSelector((state) => state.productReducer.maxMinPrice)
  const order = useSelector (state => state.productReducer.sort)
  const category = useSelector (state => state.productReducer.category)
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productReducer.allCategories);
  const sort = useSelector(state => state.productReducer.sort)
  const setOrder = (val) =>{
    dispatch({type: "SET_ORDER" , payload: val})
  }
  const handleOnSelectCategory = (e, categoryName) => {
    e.preventDefault();
    dispatch(setActive(1));
    window.scrollTo(0, 650);
    const cat = categories.find(cat => cat.name===categoryName)
    dispatch(getProductBy(cat._id, min, max, sort));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value)
    e.target.value==="A-Z"&&dispatch(getProductBy(category, min, max, "title"))
    e.target.value==="Z-A"&&dispatch(getProductBy(category, min, max, "-title"))
    e.target.value==="Mayor Precio"&&dispatch(getProductBy(category, min, max, "-price"))
    e.target.value==="Menor Precio"&&dispatch(getProductBy(category, min, max, "price"))
   
    dispatch(setActive(1));
    props.scrollTo();

  };

  return (
    <div className={isdarkMode? SortDark :  SortContainer} ref={ref}>
      <Form.Select 
      value={order}
      onChange={(e) => handleChange(e)}>
        {/* <option value="High to Low Price">mayor precio</option>
          <option value="Low to High Price">menor precio</option> */}
        <option value="" defaultValue>
          Ordena por
        </option>
        <option >A-Z</option>
        <option >Z-A</option>
        <option >Menor Precio</option>
        <option >Mayor Precio</option>
      </Form.Select>
      <NavDropdown className={CATEGORIAS} title="Categorías" id="navbarScrollingDropdown">
                {categories?.map((category) => {
                  return (
                    <NavDropdown.Item
                    key={category._id}
                    
                    onClick={(e) => handleOnSelectCategory(e, category.name)}
                    href="#"
                    >
                        {category.name}
                    </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
      <div className={CATEGORIAS}>
        <PriceFilter />
      </div>
    </div>
  );
});

export default Sort;
