// funciones

//funcion saluda al usuario

/*let nombreUsuario = prompt ("Dime tu nombre");

//declaracion de una funcion 
function saludar (nombre){
    return `Bienvenido ${nombre}`
}

//llamado de una funcion
console.log(saludar (nombreUsuario));*/


// funcion que multiplique dos numeros. la funcion debe retornar solamente el resultado . llamar a la funcion multiplicar
/*let numero1 = prompt("dime un número");
let numero2 = prompt("dime otro número")

function multiplicar (numero1, numero2){
    let total = parseFloat(numero1) * parseFloat(numero2);
    return `la multiplicación es: ${total}`
}
console.log(multiplicar(numero1, numero2));*/

//crear una funcion que le diga cuanto debe ahorrar el mes segun sus ingresos

let ingresos = prompt("¿Cúales son tus ingresos?")

function calcularAhorro (numero1){
    let porcentaje = parseFloat(numero1) * parseFloat (0.1);
    return `El porcentaje de ahorro seria: ${porcentaje}`
}

console.log(calcularAhorro(ingresos));