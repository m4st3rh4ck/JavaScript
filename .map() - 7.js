/*Ejercicio
Implementa una función llamada transformarConIndice que tome un array de números y realice las siguientes transformaciones usando map():

Si el índice es par, multiplica el número por 2.
Si el índice es impar, suma 5 al número.
En ambos casos, añade el índice al resultado de la operación anterior.
Ejemplo de uso:

const numeros = [1, 2, 3];
console.log(transformarConIndice(numeros));
// Debería imprimir: [2, 8, 8]
// Explicación:
// Índice 0 (par): (1 * 2) + 0 = 2 + 0 = 2
// Índice 1 (impar): (2 + 5) + 1 = 7 + 1 = 8
// Índice 2 (par): (3 * 2) + 2 = 6 + 2 = 8*/

function transformarConIndice(numeros) {
    return numeros.map(function(numero, indice) {
        if (indice % 2 === 0) {
            // Índice par: multiplicar el número por 2 y añadir el índice
            return (numero * 2) + indice;
        } else {
            // Índice impar: sumar 5 al número y añadir el índice
            return (numero + 5) + indice;
        }
    });
}
/* Fin */
const numeros = [1, 2, 3, 4, 5];
console.log(transformarConIndice(numeros));
