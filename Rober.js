


function encEnv() {
    document.getElementById("Rdo").innerHTML = "Encuesta enviada";
}

function verRdos() {
    document.getElementById("RdosEnc").innerHTML = "<b>Mansilla ----- 37 % </b> <br> Carrillo -------- 22% <br> Ascacibar ----- 35% <br> Otro jugador -- 6%";
}

// ARTICLE

let leerMas = document.getElementById("leerMas");
let span_text = document.getElementById("span_text");
let leerMenos = document.getElementById ("leerMenos");
console.log(leerMas);
leerMas.addEventListener("click", act_style);

function act_style() {
    span_text.classList.add("mostrar");
    leerMas.classList.add("ocultar");
    console.log (span_text);
}

leerMenos.addEventListener("click", ocultarTexto);

function ocultarTexto(){
    span_text.classList.remove("mostrar");
    leerMas.classList.remove("ocultar");
}
