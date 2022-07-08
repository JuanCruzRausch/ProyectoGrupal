import { ordenado, setActive } from '../../redux/actions';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { SortContainer, SortDark } from './Sort.module.css';
import { scrollToProducts } from '../variablesGlobales';

const Sort = React.forwardRef((props, ref) => {
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordenado());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(ordenado(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    dispatch(setActive(1));
    props.scrollTo();
  };

  return (
    <div className={isdarkMode? SortDark :  SortContainer} ref={ref}>
      <Form.Select onChange={(e) => handleChange(e)}>
        {/* <option value="High to Low Price">mayor precio</option>
          <option value="Low to High Price">menor precio</option> */}
        <option value="" defaultValue>
          Ordena por
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="High to Low">Mayor precio</option>
        <option value="Low to High">Menor precio</option>
      </Form.Select>
    </div>
  );
});

export default Sort;
