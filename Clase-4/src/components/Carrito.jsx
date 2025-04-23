import React from 'react'
import { useCart } from '../context/CartContext'

export const Carrito = () => {

  const { carrito, eliminarProducto } = useCart()


  return (
    <div style={{background:"#eee", padding: "1rem", marginBottom:"1rem", color: 'black'}}>
        <h3>Carrito</h3>
        <p>Total de Productos: {carrito.length}</p>
        <ul>
          {
            carrito.map((prod, index) => {
              
                return (
                  <div key={index} style={{display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center'}}>
                  <li>{prod.nombre}</li>
                  <button onClick={() => eliminarProducto(prod.id)}>X</button>
                  </div>
                )
            })
          }
        </ul>
    </div>
  )
}
