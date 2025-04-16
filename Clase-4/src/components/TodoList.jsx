import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { Button } from './Basics/Button'
import { Input } from './Basics/Input'
import { Titulo } from '../Titulo'
import { useTarea } from '../hooks/useTarea'

export const TodoList = () => {

    const {agregarTarea, eliminarTarea, tarea, setTarea, tareas} = useTarea()


  return (
    <div>
        <Titulo titulo={"Agregar Tareas"}/>
        <form onSubmit={agregarTarea}>
    	    <Input tarea={tarea} setTarea={setTarea}/>
            <Button titulo={"Agregar Tarea"}/>
        </form>
        <TodoItem tareas={tareas} eliminarTarea={eliminarTarea}/>
    </div>
  )
}
