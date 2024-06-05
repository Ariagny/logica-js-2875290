const btnNumeros  = document.querySelectorAll(".min");
const flotante = document.querySelector("#flotante");
const cuadroOpacidad = document.querySelector("#cuadro");
const equis = document.querySelector("#equis");
const btnSiguiente = document.querySelector("#sig");
const btnAnterior = document.querySelector("#ant");
const imgPrincipal = document.querySelector("#imgprincipal");

//funciones
function lightbox (e){
    console.log(e.target.src)
    let currentImg = e.target.src;
    flotante.style.top = "0vh";
    flotante.style.transitionDuration = "0.5s";
    imgPrincipal.setAttribute("src",currentImg)
}

function cerrar (){
    flotante.style.top = "-100vh";
    flotante.style.transitionDuration = "0.5s";

}
let estado =  0;

function cambiarImagen(){
        if (estado <= 0){
        imgPrincipal.setAttribute("src", "img1.jpg") 
        estado = 1; 
        }else{
        imgPrincipal.setAttribute("src", "img2.jpg")
        estado = 0;
        }   
}


btnNumeros[0].addEventListener("click",lightbox);
btnNumeros[1].addEventListener("click",lightbox);
equis.addEventListener("click",cerrar);
cuadroOpacidad.addEventListener("click",cerrar);
btnSiguiente.addEventListener("click",cambiarImagen);
btnAnterior.addEventListener("click",cambiarImagen);