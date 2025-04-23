import React, { useEffect, useState } from 'react'
import { Input } from './Basics/Input'
import { Button } from './Basics/Button'
import { Titulo } from '../Titulo'

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [nombre, setNombre] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    
    let listaIds = [9, 25, 27, 47, 149, 77]


// }, []) si [] no tiene parametros, solo se ejecuta una sola vez, 
//          cuando se monta el componente

    const obtenerPokemon = async () => {
        const nuevosPokemons = {}

        for (const id of listaIds) {
            // console.log("id : ", id);

            try {      
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await resp.json()

                nuevosPokemons[data.name] = {
                    id: data.id,
                    nombre: data.name,
                    altura: data.height,
                    peso: data.weight,
                    sprite: data.sprites.other.showdown.front_default
                }

            } catch (error) {
                console.error("El error fue: ", error)
            }
            
        }

        // Para retornar un array con los valores de un objeto
        // Ignorando sus Keys        
        setPokemons(Object.values(nuevosPokemons))
    }


    
    // Use Effect: Es un hook
    // Todo lo que este dentro del useEffect, se va a ejecutar,
    // dependiendo de si cambia de estado sus dependencias
    useEffect(() => {
        obtenerPokemon()
    }, []) // <-- Todo lo que este dentro de [] cuenta como dependencias

    useEffect(() => {
        console.log("Pokemons: ", pokemons);
    }, [pokemons, count])
        
    
  return (

    <>
        <Titulo titulo="Listado Pokemons"/>
        {
                pokemons.map((poke, i) => {

                    console.log("pokemon: ", poke);
                    

                    return (
                        <div>
                            <h3>ID: {poke.id}</h3>
                            <div>
                                <img src={poke.sprite} alt={`Imagen de ${poke.name}`} />
                            </div>
                            <h3>Nombre: {poke.name}</h3>
                            <p>Peso: {poke.weight}</p>
                            <p>Altura: {poke.altura}</p>
                        </div>
                    )
                })
        }
    </>
  )
}
