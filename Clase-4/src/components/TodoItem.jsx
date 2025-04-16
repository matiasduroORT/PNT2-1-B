import React from 'react'
import { Button } from './Basics/Button'

export const TodoItem = ({ tareas, eliminarTarea }) => {


    return (
        <>
            {
               
               tareas.length > 0
                ?
               tareas.map((t, index) => (
                    <ul>
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '300px',
                                margin: '5px 0'
                            }}
                        >
                            <li>{t}</li>
                            <Button eliminarTarea={eliminarTarea} titulo={'x'} t={t} />
                        </div>
                    </ul>
                ))
                :
                (
                   <h3>No hay tareas...</h3> 
                )
            }
        </>
    )
}
