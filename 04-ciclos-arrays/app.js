let materias = ["matematicas", "sociales" , "español" , "fisica"]
console.log(`materia 1: ${materias[2]}`)

console.log(materias[4]);
materias[4] = "deporte";
console.log(materias)
console.log(`el array materias tiene ${materias.length} elementos`)

console.log(Boolean(materias.length >= 6 ));

//quiero añadir un elemento al final de la rae con length
materias[materias.length]  = "pintura";

//ciclos y arrays 

//primera pactica: imprimir todos los elementos de un aaray "peliculas" en una lista numerada con ayuda de for

let peliculas = ["Harry Potter", "Back to future" , "Batman" , "Rapidos y furiosos" , "Los 4 fantastìcos" , "Avatar" , "It" , "Spider-man"];
//inicialización , condición, incremento
for(let i = 0; i < peliculas.length; i++) {
        console.log(`${i+1}.${peliculas[i]}`)
}

/*Realizar un programa que le pide artistas o bandas musicales al usuariobcon ayuda del ciclo while, 
cuando el usurio escriba salir se debe imprimir la lista de artistas ue el usuario ingreso. cada artista
 añadido se debe guardar en un array*/

let artistas = [];
let inputUsuario =prompt(`dime un artista o  escriba "salir" para cerrar`)

while(inputUsuario != "salir"){
    artistas.push(inputUsuario)
    inputUsuario =prompt(`dime un artista o  escriba "salir" para cerrar`)
}

for(let i = 0; i<artistas.length; i++){
    console.log(`${i+1}.${artistas[i]}`)
}