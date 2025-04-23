import React from 'react'
import { useCart } from '../context/CartContext';

export const AgregarProducto = () => {

  const {carrito, handleAgregar} = useCart()

  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h3>Cantidad: {carrito.length}</h3>
        <button onClick={handleAgregar}>Agregar Producto</button>
    </div>
  )
}
