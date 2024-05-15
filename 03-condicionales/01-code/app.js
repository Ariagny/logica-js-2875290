// ejemplo de incremento
let vidas = 5;

vidas++ //suma uno al valor de vidas
vidas++
vidas--
console.log("vidas:" + vidas)
let puntuacion = 0;
puntuacion += 3;
puntuacion += 5;
puntuacion -= 3;

console.log("Puntuación:" + puntuacion)

// == compara solo valor y el === compara valor y tipo de dato
Boolean(5 < 2)
Boolean("pedro" == "jose")
Boolean(3 == 3) //true
Boolean(3 == "3") //true
Boolean(3 === "3") //false

// == compara solo valor y el === compara valor y tipo de dato
Boolean(3 != "3")//false
Boolean(3 !== "3")//true

//operadores logicos

let estatura = 170;
let estaturaUsuario = 169;
let velocidad = 30;
let velocidadUsuario = 36

//&& (y): ambas tienen que ser verdadera

Boolean(estaturaUsuario >= estatura && volocidadUsuario >= velocidad)// falsa

//condicional programa que pregunte la edad al usuario (promt) y depende del valor decir si es mayor o menor de edad.

//let edadUsuario = prompt ("¿Cúal es tu edad?");

/*if(edadUsuario >= 18 ){
    console.log("Eres mayor de edad")

}else{
    console.log("Eres menor de edad")
}*/

//depende del color del semaforo le damos un mensaje al usuario, si pone un color diferente a rojo, verde, amarillo dira no se que hacer.
/*let color = prompt("¿Un color semaforo").toLowerCase();

if(color === "rojo"){
    console.log("Detente")
}else if(color === "amarillo"){
    console.log("preparese")
}else if (color === "verde"){
    console.log("arranque")
}else{
    console.log("No se que hacer")
}*/

let nombre = prompt("¿Cúal es tu nombre?").toLowerCase();
let edad = prompt("¿Cúal es tu edad?").toLowerCase();


if (nombre === "mario" || nombre === "carlos" && edad >= 18){
    console.log("Puede ingrear a la zona VIP")
}else if (edad >= 18){
    console.log("Puede ingresar a la discoteca")
}else{
    console.log("No puede ingresar a la discoteca")
}