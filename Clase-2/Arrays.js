let frutas = ["Banana", "Manzana", "Frutilla"]

// console.log(frutas);

// METODOS DE ARRAYS

// PUSH, agregar un elemento al final del array
frutas.push("Uva")

// console.log(frutas);

// POP, elimina un elemento del array, el ultimo elemento

frutas.pop()
// console.log(frutas);

// Unshift, agregar un elemento al comienzo del array
frutas.unshift("Mango")

// console.log(frutas);

frutas.shift()

// console.log(frutas);


let numeros = [1, 2, 3, 4, 5, 6 , 7]


// Filter, filtra los elementos, 1 por 1, segun la condicion, y devuelve un nuevo array

// let nuevosNumeros = numeros.filter( num => {
//     return num >= 5
// })

let nuevosNumeros = numeros.filter( (num) => num >=5)

// console.log("Nuevos Numeros: ", nuevosNumeros);




// Reduce, Lo que hace es Reducir, el array, a un solo valor, acumulandolo en el acumulador.
// Acumulador es donde guarda el total a devolver

// let sumaArray = numeros.reduce((acumulador, num) => acumulador + num, 0)

let sumaArray = numeros.reduce((acumulador, num) => {

    let total = acumulador + num
    // console.log("Por ahora es: ", total);
    return total
}, 100)

// console.log(sumaArray);

// console.log("Numeros: ", numeros);

//FIND: Devuelve EL PRIMER elemento que cumpla con la condicion

let busqueda = numeros.find( numero => numero >= 3)

// console.log(busqueda);


//SOME: devuelve true si al menos un elemento cumple con la condicion

let cumplio = numeros.some( num => num == 6)

// console.log("Cumplio? ", cumplio);


//EVERY: devuelve true si TODOS los elementos cumplen la condicion

let todosCumplieron = numeros.every(num => num < 7)

// console.log("todosCumplieron? ", todosCumplieron);

// JOIN: convierte el array a un nuevo string, y los separa a cada elemento, por el separador indicado

let nuevoString = numeros.join("")

// console.log("Nuevo String: ", nuevoString);

// SPLIT
// Separa un string, y lo convierte en un nuevo array dependiendo el parametro para separarlos

let palabra = "Parlante"

let nuevoArray = palabra.split("");

// console.log("Nuevo Array: ", nuevoArray);

//Splice, Modifica el array, eliminando un elemento, y reemplazandolo por otro
// Y retorna el elemento eliminado


let colores = ["Azul", "Rojo", "Verde", "Violeta"]

// console.log("colores: ", colores);

let eliminado = colores.splice(0, 1, "Blanco")

// console.log("El eliminado, ", eliminado);

// console.log("colores: ", colores);


// Concat: Concatena el array con otro array, y devuelve un nuevo array

// let arrayConcatenado = colores.concat(frutas)

// frutas.forEach(element => {
//     colores.push(element)
// });

// console.log("colores: ", colores);

// map: transforma cada elemento del array, y devuelve uno nuevo, segun la funcion
// let ColoresMapeados = colores.map(color => {
//     return "El Color es: " + color
// })

let ColoresMapeados = colores.map(color => "El Color es: " + color)

// console.log("ColoresMapeados", ColoresMapeados);

// let num = 7
// if(num === 7) console.log("es siete");

// console.log("Colores: ", colores);

// Reverse: Da vuelta un array
// console.log("Colores Reverseados: ", colores.reverse());

let numbers = [1, 2, 3 ,4]

let coloress = ['rojo', 'blanco']

console.log([...numbers, 5, 6, ...colores]);










