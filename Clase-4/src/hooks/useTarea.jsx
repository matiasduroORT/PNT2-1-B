import React, { useState } from 'react'

export const useTarea = () => {

    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([]) 

    const agregarTarea = (e) => {
        e.preventDefault();

        if(tarea.trim() === '') return;

        setTareas([...tareas, tarea])
        setTarea('')
    }

    const eliminarTarea = (tareaAEliminar) => {
        setTareas(tareas.filter((t) => t !== tareaAEliminar))
    }


    return {
        agregarTarea,
        eliminarTarea,
        tarea,
        tareas,
        setTarea
    }
}
