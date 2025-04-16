import React from 'react'

export const Input = ({tarea, setTarea}) => {

  return (
    <input
    value={tarea}
    onChange={(e) => setTarea(e.target.value) }
    placeholder='Escribi una tarea'
    />
  )
}
