

// En base a la funcion que se les da a continuacion
// Traer la informacion de los primeros 151 pokemons
// Y en base a la respuesta, extraer la URL que viene de cada pokemon,
// Y devolver en el objeto respuesta, los nombres de los pokemons, agrupados por el tipo principal
// En la primer consulta la estructura es 
// "results": [
// {
// "name": "bulbasaur",
// "url": "https://pokeapi.co/api/v2/pokemon/1/"
// },
// {
// "name": "ivysaur",
// "url": "https://pokeapi.co/api/v2/pokemon/2/"
// },
// ]
//  En base a la url que se nos da, podemos mediante un proceso que recorra la respuesta, 
//  hacer un fetch a esa api.
//  Ejemplo de resultado final:
// // Respuesta final: {
//   grass: [
//     'bulbasaur',  'ivysaur',
//   ],
//   fire: [
//     'charmander', 'charmeleon',
//   ],
//  etc...
// }

 function obtenerPokemonsPorTipo() {
    let respuesta = {};
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
       
}

obtenerPokemonsPorTipo();
