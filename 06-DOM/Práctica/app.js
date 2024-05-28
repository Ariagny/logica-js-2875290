//Ejercicio del boton 
const miImput = document.getElementById("boton");

function cambiarValue(){
    console.log(miImput.value)
    miImput.value = "lanzamiento exitoso 😁"
}

miImput.addEventListener("click", cambiarValue);

//ejercicio del cuadro de colores 
const cajaColor = document.getElementById("caja");
const botonesColores = document.querySelectorAll(".btnColores");

console.log(cajaColor)
console.log(botonesColores)

function pintarCaja (e){
    console.log(e.target.getAttribute("data-color"))
    let newColor = e.target.getAttribute("data-color");
    cajaColor.style.backgroundColor = newColor;
}
botonesColores[0].addEventListener("click",pintarCaja)
botonesColores[1].addEventListener("click",pintarCaja)
botonesColores[2].addEventListener("click",pintarCaja)
botonesColores[3].addEventListener("click",pintarCaja)