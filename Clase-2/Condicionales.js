
// let edad = 21;

// IF, ELSE IF, ELSE

// if(edad < 18){
//     console.log("Es menor de edad");
    
// } else if (edad < 21){
//     console.log("Es joven, necesita tutor");
// } else if (edad < 28){
//     console.log("Sigue siendo joven"); 
// } else{
//     console.log("Es un adulto");
// }


// Operador Ternario

// Una forma facil de resumir un if y else

let edad = 20;

// ? Representa si la condicion es true
// : Representa si la condicon es false

// let licencia = edad < 18 ? "Denegado" : "Permitido"
let licencia = edad < 18 ? "Denegado" : 
              (edad <= 21) ? "Permitido con tutor" 
              : "Permitido Total"
// console.log("Licencia: ", licencia);


// Operador LOGICO &&
// Se ejecuta si la condicion es true

let permiso = true

// if (permiso === true) {
//     console.log("Permitido");
// }

permiso && console.log("Permitido");



// Validar si accedemos a propiedades, que todavia no existen
// O que no van a existir directamente

const usuario = {
    nombre: "Carlos",
    edad: 20
}


// SIMULAMOS UNA PETICION A UNA BASE DE DATOS PARA TRAER DIRECCION
setTimeout(() => {
    usuario.direccion = {
        calle: "La Plata",
        altura: 29,
        edificio:{
            piso: 3,
            depto: 4
        }
    }
    
}, 2000);

// Para validar, asignamos ? al final de la propiedad que esperamos

console.log("Direccion: ", usuario.direccion);
console.log("Altura: ", usuario.direccion?.altura.numero);


// setTimeout(() => {
//     console.log("Usuario: ", usuario);
// }, 2001);


