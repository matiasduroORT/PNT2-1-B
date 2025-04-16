import React from 'react'

export const Counter = () => {


    // no se pueda incrementar mas de 10
    // no se pueda reducir mas de 0
  return (
    <div>
        <h2>Contador: 0</h2>
        <button>+1</button>
        <button>-1</button>
    </div>
  )
}
