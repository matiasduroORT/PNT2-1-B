// Javascript es un lenguaje sincronizado, se ejecuta en un solo hilo.

// Este hilo solo, se refiere a que corre un solo proceso

// Asincronidad: Permite diferenciar la ejecucion de codigo en distintas PILAS


console.log("1");

let nombre;

setTimeout(() => {
    nombre = 'Carlos'
}, 5000);

setTimeout(() => {
    console.log("3");
    console.log(nombre);
}, 2500);




// Ejemplos de Funciones Asincronicas:
// settimeout, 
// peticiones HTTP, o request a sitios web, backends, etc
// llamadas a base de datos




