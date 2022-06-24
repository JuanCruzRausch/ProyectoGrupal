import { ordenado } from '../../redux/actions';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {SortContainer} from './Sort.module.css'
export default function Sort() {
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordenado());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(ordenado(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <div className={SortContainer}>
      <Form.Select  onChange={(e) => handleChange(e)}>
        {/* <option value="High to Low Price">mayor precio</option>
          <option value="Low to High Price">menor precio</option> */}
        <option value="" defaultValue>Ordena por</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="High to Low">Mayor precio</option>
        <option value="Low to High">Menor precio</option>
      </Form.Select>
    </div>
  );
}
