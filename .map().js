/*                               Ejercicio
Implementa la función obtenerLongitudes(palabras) utilizando el método map(). 
Esta función debe recibir un array de palabras y devolver un nuevo array que 
contenga la longitud de cada una de esas palabras.

Ejemplo de uso:

console.log(obtenerLongitudes(["JavaScript", "es", "genial"])); // [10, 2, 6]
console.log(obtenerLongitudes(["Hola", "Mundo"])); // [4, 5]
console.log(obtenerLongitudes([""])); // [0]
*/

const obtenerLongitudes = (palabras) => palabras.map(palabra => palabra.length);

console.log(obtenerLongitudes(["OpenAI", "ChatGPT", "JavaScript", "Python"]));
console.log(obtenerLongitudes(["", "a", "abc", "abcdef"]));
