import React from 'react'

function ProductItemToCart({data, DelOne, DelAll}) {
 
  let {id, name,price,quantity} = data;

  return (
    <div>
      <h4>{name}</h4>
      <h5>{price}.00 x {quantity}= ${price * quantity}.00</h5>

      <button onClick={()=> DelOne(id)}>Eliminar uno</button>
      
      <button onClick={()=> DelAll(id,true)}>Eliminar todos</button>
    </div>
  )
}

export default ProductItemToCart