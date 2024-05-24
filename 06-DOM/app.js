const pantalla = document.getElementById("titulo");
const miBtn = document.getElementById("btn"); 

//crear el evennto
miBtn.addEventListener("click", function(){
    pantalla.style.color = "blueviolet";
    pantalla.style.fontFamily =  "arial";
    pantalla.style.fontSize = "4em";//cambia color
    pantalla.innerText = "Ejecutando script 😁"; //cambia el texto dentro de las etiquetas

})