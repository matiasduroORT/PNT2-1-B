

let listaIds = [6, 49, 58, 150, 79, 66]
// https://pokeapi.co/api/v2/pokemon?limit=150&offset=0

// Devolver un objeto respuesta, con un objeto por pokemon, 
// el cual el nombre del pokemon, sea la llave
// y el objeto debe contener sprite front default, altura, peso, nombre, y id de cada pokemon

// respuesta = {
//     pikachu:{
//         id: 1,
//         altura: 10
//     },
//     ditto:{
//         id: 2,
//         altura: 10
//     }
// }


function obtenerPokemon(listaIds){

    let respuesta

    //
    // fetch https://pokeapi.co/api/v2/pokemon?limit=150&offset=0
    // De todo el fetch, obtener la info de esos ids en particular, en base al indice
    // y luego recorrer esos en la siguiente url
    // fetch https://pokeapi.co/api/v2/pokemon/${}



    console.log("Respuesta final: ", respuesta);
    
}

obtenerPokemon(listaIds)