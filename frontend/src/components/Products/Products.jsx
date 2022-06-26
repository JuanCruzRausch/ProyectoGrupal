import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getPaginate, ordenado, setActive } from '../../redux/actions/index';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter'
import { Products_Container, Cards_Container, Filter_Container, Cards_Filter_Container,Products_Paginate } from './Products.module.css';
import Carousell from '../Carousel/Carousel';
import Pagination from 'react-bootstrap/Pagination';

function Products({ refElement, scrollTo }) {
  const dispatch = useDispatch(); 
  const productos = useSelector((state) => state.Allproduct);
  let Active = useSelector(state=> state.pagina)

  useEffect(() => {
    dispatch(getAllProducts(Active));
    dispatch(ordenado(Active));
    
  }, []);
  let items = [];
  let length=Math.ceil(productos.length/15)<8?Math.ceil(productos.length/15):8

  for (let number = 1; number <= length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === Active} onClick={() =>handleGetProducts(number)}>
      {number}
    </Pagination.Item>,
  );
}
const handleGetProducts = (pagina) =>{
  // dispatch(getPaginate(pagina)),
  dispatch(setActive(pagina))
}

  return (
    <div className={Products_Container}>
      <Carousell />
      <Sort ref={refElement} scrollTo={scrollTo}/> 
      <div className={Cards_Filter_Container}>
        <Filter className={Filter_Container} scrollTo={scrollTo} />
        <span className={Cards_Container}>
          {productos.filter((e,i)=> {return i<=15*Active && i>=15*(Active-1)} ).map((e,i) => (
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
      <div className={Products_Paginate}>
      <Pagination size="lg">
        {items}
        </Pagination>
      </div>
    </div>
  );
}

export default Products;
