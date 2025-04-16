// Promesas

// Las promesas nos permiten manejar tareas de forma asincronica (igual que los callbacks)
// Una promesa, representa una operacion que aun no termino, pero lo va a hacer en el futuro


// Promesa basica

console.log('Inicio...');


const promesaBasica = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true

        if(exito === true){
            resolve("Operacion Exitosa")
        }else{
            reject("Operacion fallida")
        }
    }, 2000);
})

// console.log("Promesa: ", promesaBasica);
// setTimeout(() => {
//     console.log("Promesa: ", promesaBasica);

// }, 2001);


// El uso del THEN/ CATCH/ FINALLY
// el finally es CASI opcional

// FINALLY: finalmente, le da un cierre a la promesa
// Catch: atrapa el error, atrapa el reject
// Then: entonces... , sirve para llegar al resolve

// array.map( ar => {

// })

// promesaBasica
//     .then((resultado) => {
//         console.log("Resultado: ", resultado);
//     })
//     .catch((error) => {
//         console.log("Algo salio mal...");
//         console.error("Catch: ", error)
//     })
//     .finally(() => {
//         console.log("Termino el proceso");
//         console.log("Esto se ejecuta siempre, haya error o no");
        
//     })


// Funcion que devuelve una promesa

// function obtenerNumeroConDelay(numero){
//     return new Promise( (res, rej) =>{
//         if(!numero) rej(0)

//         setTimeout(() => {
//             res(numero)
//         }, 2000);
//     })
// }

// function obtenerPalabraConDelay(palabra){
//     return new Promise(( resolve, reject) => {
//         if (!palabra) reject("Nada")
//             setTimeout(() => {
//                 resolve(palabra)
//             }, 2000);
//     })
// }

// // obtenerNumeroConDelay(42).then( num => console.log('Numero recibido: ', num))
// // obtenerPalabraConDelay("Parlante").then( word => console.log('Palabra recibida: ', word))

// // Promise ALL

// // Ejecutar varias promesas en paralelo, y esperar que todas terminen

// // const promesas = [
// //     obtenerNumeroConDelay(),
// //     obtenerPalabraConDelay('Parlante')
// // ]

// // const resultados = Promise.all(promesas).then((resultados) => {
// //     console.log('Resultados de todas las promesas: ', resultados);
// // }).catch((error) => {
// //     console.log("Error: ", error);
// // })

// // PROMESA CON FETCH
// // fetch: funcion nativa de javascript para consultas HTTP
// // fetch: me devuelve una PROMESA
// // .json(): EXTRAE LA DATA, DE LA RESPUESTA DE LA API

// let pokemonData;

// // const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/charmander")
// //                 .then((res) => res.json())
// //                 .then((data) => {
// //                     console.log("Nombre del pokemon: ", data.name);
// //                     console.log("Altura del pokemon: ", data.height);
// //                     console.log("Peso del pokemon: ", data.weight);
// //                     console.log("Imagen del pokemon: ", data.sprites.front_default);
// //                     pokemonData = data
// //                 })
// //                 .catch( err  => {
// //                     console.log("Error en la consulta: ", err);
                    
// //                 })

//                 // setTimeout(() => {
//                 //     console.log("DATA POKEMON: ", pokemonData.name);
//                 // }, 1000);


// // ASYNC / AWAIT 
// // Es una forma mas LEGIBLE de trabajar con promesas

// // ASYNC se usa para declarar a una funcion como asincrona
// // Puedo declarar que en algun punto, se quede a esperar algo
// // Para que algo espere, le agrego el await adelante 



// // const obtenerPokemon = async (nombre) => {
// // }
 
// let nombrePokemon;

// // TRY / CATCH
// // TRY: Intenta ejecutar el codigo

// async function obtenerPokemon(nombre){

//     try {
//         const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)       
//         const data =  await respuesta.json()
        
//         // const respuestas = await Promise.all(obtenerNumeroConDelay(5), obtenerPalabraConDelay('Poke'))
//         const [numero, palabra] = await Promise.all([obtenerNumeroConDelay(5), obtenerPalabraConDelay('Poke')])
//         console.log("numero: ", numero);
//         console.log("palabra: ", palabra);


//     } catch (error) {
//         // console.log("Ups, algo fallo", error);
        
//     }
// }
// obtenerPokemon('pikachu')

// // CALLBACKS aninados o callback Hell => Es un codigo muy dificil de leer
// // Promesas => Encadenamiento, sencillo de callbacks, con then y catch
// // Async/Await => Escritura mas sencilla de leer (Parece codigo sincronica, tiene el await que permite esperar y hacerse asincronico)

// // Resumen:
// // Promise = representa una operacion que puede completarse, o fallar. Se manejan con then o async/await
// // then = Se ejecuta si salio todo bien
// // catch = se ejecuta si algo salio mnal
// // finally = medio opcional, se ejecuta siempre al final
// // Promise.all = espera que todas las promesas se resuelvan, permite resolverlas al mismo tiempo
// // async - await = Forma moderna de escribir codigo asincronico



