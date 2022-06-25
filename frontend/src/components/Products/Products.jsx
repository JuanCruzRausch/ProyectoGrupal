import React from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, ordenado } from '../../redux/actions/index';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter'
import { Products_Container, Cards_Container, Filter_Container, Cards_Filter_Container } from './Products.module.css';
import Carousell from '../Carousel/Carousel';

function Products({ refElement, scrollTo }) {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.Allproduct);
 
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(ordenado());
  }, []);
  return (
    <div className={Products_Container}>
      <Carousell />
      <Sort ref={refElement} scrollTo={scrollTo}/> 
      <div className={Cards_Filter_Container}>
        <Filter className={Filter_Container} scrollTo={scrollTo} />
        <span className={Cards_Container}>
          {productos.map((e,i) => (
            <SingleProduct
              key={i}
              image={e.thumbnail}
              name={e.title}
              price={e.price}
              id= {e._id}
            />
          ))}
        </span>
      </div> 
    </div>
  );
}

export default Products;
