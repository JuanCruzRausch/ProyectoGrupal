import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, ordenado } from '../../redux/actions/index';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter'
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
      <Filter />
      <Sort />
      {Products.map((e) => (
        <SingleProduct
          key={e.id}
          image={e.productImage}
          name={e.productName}
          price={e.productPrice}
        />
      ))}
    </div>
  );
}

export default Products;
