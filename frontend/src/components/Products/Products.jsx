import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, ordenado } from '../../redux/actions/index';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sort from '../Sort/Sort';
import { Products_Container } from './Products.module.css';

function Products() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Allproduct);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(ordenado());
  }, []);
  return (
    <div className={Products_Container}>
      <Sort />
      {Products.map((e,i) => (
        <SingleProduct
          key={i}
          image={e.image}
          name={e.title}
          price={e.price}
        />
      ))}
    </div>
  );
}

export default Products;
