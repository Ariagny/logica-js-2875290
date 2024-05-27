const numero = document.getElementById("número");
const incremento = document.getElementById("boton1"); 
const decremento = document.getElementById("boton2"); 

let i = 0;

incremento.addEventListener("click", function(){
    if(parseFloat(numero.innerHTML)<20){
        i++;
        numero.innerHTML = i;
    }
});

decremento.addEventListener("click", function(){
    if(parseFloat(numero.innerHTML)>0){
        i--;
        numero.innerHTML = i;
    }
});