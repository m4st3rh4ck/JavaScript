/*                      Ejercicio
Modifica el siguiente código para que la función otroSaludo
tenga su propia variable local mensaje con el valor "Hola desde otra función". 
La función saludar debe mantener su variable local original.
*/
function saludar() {
    var mensaje = "Hola, mundo!";
    console.log(mensaje);
}

function otroSaludo() {
    var mensaje = "Hola desde otra función" 
    console.log(mensaje);
}

saludar();
otroSaludo();
