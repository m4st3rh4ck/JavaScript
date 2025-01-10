//Funciones en JavaScript
function saludar() {
    mensaje = "Hola, mundo!";  /* Modifica esta línea */
}

function otroSaludo() {
    console.log(mensaje);  // Puede acceder a 'mensaje' porque es global
}

saludar();
otroSaludo(); 
