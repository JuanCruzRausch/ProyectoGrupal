import { sort, setActive } from '../../redux/actions';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { SortContainer, SortDark } from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux'


const Sort = React.forwardRef((props, ref) => {
  const order = useSelector (state => state.productReducer.sort)
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sort());
  }, [dispatch]);

  const setOrder = (val) =>{
    dispatch({type: "SET_ORDER" , payload: val})
  }

  const handleChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value)
    e.target.value==="A-Z"&&dispatch(sort("title"))
    e.target.value==="Z-A"&&dispatch(sort("-title"))
    e.target.value==="Mayor Precio"&&dispatch(sort("-price"))
    e.target.value==="Menor Precio"&&dispatch(sort("price"))
   
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
    </div>
  );
});

export default Sort;
