/*                        Ejercicio
Crea una función llamada aplicarOperacion que tome tres parámetros:

Una función que realiza una operación matemática.
Dos números sobre los cuales se realizará la operación.*/
function aplicarOperacion(operacion, num1, num2) //Funcion CALLBACK
{
    return operacion(num1, num2);
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

console.log(aplicarOperacion(restar, 5, 3));
console.log(aplicarOperacion(multiplicar, 4, 2));
