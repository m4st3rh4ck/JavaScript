/*                Ejercicio
Implementa la función elevarAlCuadrado(numeros), 
la cual toma un array de números y devuelve un 
nuevo array con cada número elevado al cuadrado.

Ejemplo:

console.log(elevarAlCuadrado([ 2, 3, ])); // [ 4, 9]
*/

const elevarAlCuadrado = (numeros) => numeros.map(numero => numero ** 2)

console.log(elevarAlCuadrado([1, 2, 3, 4, 5]));
console.log(elevarAlCuadrado([10, 20, 30]));
console.log(elevarAlCuadrado([-1, 0, 1]));
