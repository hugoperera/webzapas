/*------------------Catalogo---------------------*/
// NIKE P-6000
if (document.getElementById("btn_blanco_p6000")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_blanco_p6000").addEventListener("click", function() {
        foto.src = "../img/zapas/nikep6000blancas.png";
    });
    
    document.getElementById("btn_azul_oscuro_p6000").addEventListener("click", function() {
        foto.src = "../img/zapas/nikep6000negras.png";
    });
}

// ADIDAS SAMBA
if (document.getElementById("btn_blanco_samba")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_blanco_samba").addEventListener("click", function() {
        foto.src = "../img/zapas/samba.png";
    });

    document.getElementById("btn_negro_samba").addEventListener("click", function() {
        foto.src = "../img/zapas/adidassambanegras.png";s
    });

    document.getElementById("btn_marron_samba").addEventListener("click", function() {
        foto.src = "../img/zapas/adidassambamarrones.png";
    });
}

// ASICS GEL NYC
if (document.getElementById("btn_blanco_asics")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_blanco_asics").addEventListener("click", function() {
        foto.src = "../img/zapas/asicsgelnycblancas.png";
    });

    document.getElementById("btn_negro_asics").addEventListener("click", function() {
        foto.src = "../img/zapas/asicsgelnycnegras.png";
    });

    document.getElementById("btn_azul_asics").addEventListener("click", function() {
        foto.src = "../img/zapas/asicsgelnycazules.png";
    });
}

// NEW BALANCE U2002DX
if (document.getElementById("btn_blanco_newbalance")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_blanco_newbalance").addEventListener("click", function() {
        foto.src = "../img/zapas/newbalance2002blancas.png";
    });
    
    document.getElementById("btn_negro_newbalance").addEventListener("click", function() {
        foto.src = "../img/zapas/newbalance2002negras.png";
    });
}

// ADIDAS SPEZIAL
if (document.getElementById("btn_rojo_spezial")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_rojo_spezial").addEventListener("click", function() {
        foto.src = "../img/zapas/adidasspezialrojas.png";
    });

    document.getElementById("btn_blanco_spezial").addEventListener("click", function() {
        foto.src = "../img/zapas/adidasspezialblancas.png";
    });

    document.getElementById("btn_marron_spezial").addEventListener("click", function() {
        foto.src = "../img/zapas/adidasspezialmarrones.png";
    });
}

// NIKE AIRMAX
if (document.getElementById("btn_blanco_airmax")) {
    let foto = document.getElementById("foto_zapa");
    
    document.getElementById("btn_blanco_airmax").addEventListener("click", function() {
        foto.src = "../img/zapas/nikeairmaxmoto2kblancas.png";
    });

    document.getElementById("btn_beige_airmax").addEventListener("click", function() {
        foto.src = "../img/zapas/nikeairmaxmoto2kbeige.png";
    });

    document.getElementById("btn_gris_airmax").addEventListener("click", function() {
        foto.src = "../img/zapas/nikeairmaxmoto2kgrises.png";
    });
}

/*----------------------Contacto----------------------*/


// --- VALIDACIÓN DEL FORMULARIO DE CONTACTO ---

// Buscamos el botón de enviar en la página
let botonEnviar = document.querySelector(".boton_enviar");

// El 'if' sirve para que este código solo se ejecute si estamos en la página de contacto 
// (si no ponemos esto, dará error en la página de inicio porque el botón no existe allí)
if (botonEnviar) {
    
    // Le decimos al botón que "escuche" cuando le hacemos clic
    botonEnviar.addEventListener("click", function(evento) {
        
        // 1. Guardamos en variables lo que el usuario ha escrito.
        // OJO: Asegúrate de que en tu HTML los input tienen id="nombre" e id="email"
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;
        
        // Para el checkbox, en vez de .value miramos .checked (si está marcado es true, si no es false)
        let privacidad = document.getElementById("privacidad").checked;

        // 2. Comprobamos si algún campo está vacío (las comillas "" significan vacío)
        if (nombre === "" || email === "" || mensaje === "") {
            
            // Si falta algo, sacamos un mensaje de aviso
            alert("Por favor, rellena todos los campos (Nombre, Email y Mensaje).");
            
            // Esta línea es MUY importante: cancela el envío del formulario para que la página no se recargue
            evento.preventDefault(); 
        }

        // 3. Comprobamos si NO han marcado la casilla de privacidad
        else if (privacidad === false) {
            
            alert("Debes aceptar la política de privacidad marcando la casilla.");
            evento.preventDefault(); // Cancelamos el envío
            
        } 
        // 4. Si los campos están llenos y la privacidad está marcada...
        else {
            
            // Mensaje de éxito
            alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
            
            // Aquí NO ponemos evento.preventDefault(), así que el formulario terminará de enviarse 
            // (y la página se recargará, que es lo que hace un formulario normal).
        }
    });
}