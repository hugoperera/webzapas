// Cogemos la imagen grande
let fotoZapatilla = document.getElementById("foto_zapa");

// Cogemos los dos botones
let botonBlanco = document.getElementById("btn_blanco");
let botonNegro = document.getElementById("btn_azul_oscuro");

// Le decimos qué hacer al botón blanco
botonBlanco.addEventListener("click", function() {
    fotoZapatilla.src = "../img/zapas/nikep6000blancas.png";
});

// Le decimos qué hacer al botón negro
botonNegro.addEventListener("click", function() {
    fotoZapatilla.src = "../img/zapas/nikep6000negras.png";
});