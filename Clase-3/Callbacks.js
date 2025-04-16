// Callbacks:
// Funcion que se usa como argumento

function saludar(nombre, callback){
    console.log("Hola ", nombre);
    callback()
    // La funcion saludar, toma como parametro cualquier funcion.
}

function despedir(){
    console.log("Adios");
}

// saludar("Claudio", despedir)

// set timeeout: Simula tareas asincronicas

// console.log("Inicio Programa");

// setTimeout(() => {
//     console.log("Me quedo esperando...");
    
// }, 2000);


// console.log("Fin del programa");

// Callbacks Aninados
// Simula pedir datos de a uno

function obtenerUsuario(id, callback){
    console.log("Buscando usuario...");
    setTimeout(() => {
        console.log(`Se encontro el usuario de ID ${id}`);
        callback()
    }, 1000);
}

// CALLBACK HELL: Una anidacion de callbacks, dificil de leer
function llamadoUsuarios(usuariosId){
    obtenerUsuario(1, () => {
        obtenerUsuario(2, () => {
            obtenerUsuario(3, () => {
                obtenerUsuario(4, () =>{
                    console.log("Todos los usuarios fueron encontrados");
                    
                })
            })
        })
    })

}

// llamadoUsuarios()

const numeros = [1, 2, 3]


numeros.forEach((num) => {
    // console.log("Numero: ", num);
})

const dobles = numeros.map( (num, peras) => {
    // console.log("peras: ", peras);
    
    return num * 2
})

// console.log("Dobles: ", dobles);

const mayoresA1 = numeros.filter( num => num > 1)

function ejecutarOperacion(num1, num2, pepe){
    const resultado = pepe(num1, num2)
    console.log(`El resultado de la operacion ${pepe} da igual a ${resultado}`);
}

ejecutarOperacion(2, 7, (num1, num2) => num1 + num2)
ejecutarOperacion(2, 7, (num1, num2) => num1 - num2)
ejecutarOperacion(2, 7, (num1, num2) => num1 * num2)

// Porque usar callbacks
// Permiten delegar tareas a otras funciones
// Se usan mucho en operacione asincronicas


// Porque no usarlos
// Se pueden convertir dificiles de leer

// Hay alternativa?
// Si, la alternativa son las promesas

