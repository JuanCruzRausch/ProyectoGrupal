import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, ordenado } from '../../redux/actions/index';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter'
import { Products_Container, Cards_Container, Filter_Container, Cards_Filter_Container } from './Products.module.css';
import Carousell from '../Carousel/Carousel';

function Products() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Allproduct);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(ordenado());
  }, []);
  return (
    <div className={Products_Container}>
      <Carousell />
      <Sort /> 
      <div className={Cards_Filter_Container}>
        <Filter className={Filter_Container} />
        <span className={Cards_Container}>
          {Products.filter((e,i)=>i<=20).map((e,i) => (
            <SingleProduct
              key={i}
              image={e.image}
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
