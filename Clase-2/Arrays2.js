let numeros = [7, 27, 47]

let nuevosNumeros = [...numeros, 4]

console.log(nuevosNumeros);



console.log(nuevosNumeros.map((num, index) => {

    console.log("num: ", num);
    console.log("index: ", index);
    
    
    return num + 5
}));

// console.log(nuevosNumeros.forEach((num) => {
    
//     return num * 10
// }));