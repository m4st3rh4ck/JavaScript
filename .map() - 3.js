/*
Ejercicio
Implementa la función agregarPrefijo(), la cual toma un array de palabras y un prefijo, y devuelve un nuevo array donde cada palabra tiene el prefijo agregado, separado por un espacio.

Ejemplo de uso:

console.log(agregarPrefijo(["manzana", "pera"], "come")); // ["come manzana", "come pera"]
*/

const agregarPrefijo = (palabras, prefijo) => palabras.map(palabra => `${prefijo} ${palabra}`);

console.log(agregarPrefijo(["sol", "luna", "estrella"], "mi"));
console.log(agregarPrefijo(["JavaScript", "Python", "SQL"], "Aprende"));
