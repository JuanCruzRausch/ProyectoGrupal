import React from 'react'
import {Count,Counterstock,Counter,counterbutton} from './Count.module.css'

   function ItemCount({stock,count, onAdd,price}) {
     console.log(price);
     return (
       <div className={Count}>
        <div className={Counter}>
           {
             count < stock? <button className={counterbutton} onClick={() => onAdd(count+1)}><h1>+</h1></button> : <button className={counterbutton} onClick={() => onAdd(count+1) }disabled><h1>+</h1></button>
            }
           <h1>{count}</h1>
           {
             count > 0 ? <button className={counterbutton} onClick={() => onAdd(count-1)}><h1>-</h1></button> : <button className={counterbutton} onClick={() => onAdd(count-1)} disabled><h1>-</h1></button>
            }
          </div>
          <div className={Counterstock}>
           <h2>stock disponible<br />{stock}</h2>
          </div>
       </div>
     )
   }
   export default ItemCount