import React from 'react'
import { Titulo } from '../Titulo'
import { useCart } from '../context/CartContext'

export const Header = () => {

  const {carrito} = useCart()

  return (
    <Titulo titulo={`Cantidad en Carrito: ${carrito.length}`} />
  )
}
