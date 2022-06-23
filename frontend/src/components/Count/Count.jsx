import React from 'react'

   function ItemCount({stock,count, onAdd,}) {
     return (
       <div>
           {
           count < stock? <button onClick={() => onAdd(count+1)}>+</button> : <button onClick={() => onAdd(count+1) }disabled>+</button>
           }
           <h1>{count}</h1>
           {
               count > 0 ? <button onClick={() => onAdd(count-1)}>-</button> : <button onClick={() => onAdd(count-1)} disabled>-</button>
           }
           <h2>{stock}</h2>
       </div>
     )
   }
   
   export default ItemCount