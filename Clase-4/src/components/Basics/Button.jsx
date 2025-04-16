import React from 'react'

export const Button = ({eliminarTarea, titulo, t}) => {
    return (
        <button
            onClick={() => eliminarTarea && eliminarTarea(t) }
            style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >{titulo}</button>
    )
}
