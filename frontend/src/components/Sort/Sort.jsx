import { ordenado } from '../../redux/actions';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

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
    <Form.Select onChange={(e) => handleChange(e)}>
      {/* <option value="High to Low Price">mayor precio</option>
        <option value="Low to High Price">menor precio</option> */}
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="High to Low Rating">mejor valorados</option>
      <option value="Low to High Rating">menos valorados</option>
    </Form.Select>
  );
}
