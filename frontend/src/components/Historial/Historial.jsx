import React from 'react'
import {historial, SingleProduct, ItemsContainer} from './Historial.module.css'
function Historial() {
  return (
    <div className={historial}>
    <h1>Historial de compras</h1>
      <div className={ItemsContainer}>
          <div className={SingleProduct}>
            <img src="http://http2.mlstatic.com/D_925115-MLA49795029155_042022-I.jpg" alt="producto" />
            <h2>Aceite Motul 8100 X-Cess 5w40 X 5 Lts.</h2>
            <h2>$8250</h2>
            <h3>Entregado</h3>
            <h3>Fecha de compra 23/2/22</h3>
        </div>
    </div>
  </div>
  )
}

export default Historial