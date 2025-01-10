/*                       Ejercicio
Corrige el siguiente código para que funcione correctamente.
El bucle debe mostrar los números del 0 al 9.*/

//Funcion sin modificar
function imprimirNumeros() {
    for (const i = 0; i < 10; i++) { 
        console.log(i);
    }
}
imprimirNumeros();

//Funcion modificada
function imprimirNumeros() {
    for (let i = 0; i < 10; i++) { 
        console.log(i);
    }
}
imprimirNumeros();
