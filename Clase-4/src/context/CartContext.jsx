import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {
        // setCarrito([producto])
        // setCarrito(() => [producto])
        setCarrito((prev) => [...prev, producto])
    }

    const handleAgregar = () => {
        const nuevoProducto = {
          id: Math.random().toString(36).substr(2, 5),
          nombre: 'Producto '+ Math.floor(Math.random() * 100)
        }
    
        agregarProducto(nuevoProducto)
      }

    
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id))
  }
    
    return (
        <CartContext.Provider value={{carrito, handleAgregar, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}