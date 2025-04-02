// var nombre = "Matias"


function saludo(){

    var nombre = "Matias"
    let apellido = "todavia no existe";
    console.log("Apellido: ", apellido);
    
    if (true) {
        apellido = asignarApellido(apellido)
    }
    console.log("Apellido: ", apellido);

    console.log(nombre);
}

function asignarApellido(apellido){
    return apellido = 'Duro'
}

function despedida(adios){


    console.log("Adios es: ", adios);
    
}



function principal(){
    let materia = "PNT2"
    // despedida(adios)
    console.log("Materia; ", materia);
    
    // let adios = "Nos vemos"
    // saludo()
}


principal()


