/*                                 Ejercicio
Implementa la función contarElementos(matriz), la cual toma un array de arrays (matriz), 
y devuelve un nuevo array con la cantidad de elementos en cada subarray.

Ejemplo de uso:

console.log(contarElementos([[1, 2], [3, 4, 5], [6]])); // [2, 3, 1]
El elemento interior siempre será un array, pero puede tener cualquier cantidad de elementos.
*/

function contarElementos(matriz) {
    return matriz.map(function(subarray) {
        return subarray.length;
    });
}


console.log(contarElementos([[2], [3, 4, 5], []]));
console.log(contarElementos([["a", "b", "c"], ["d"], ["e", "f"]]));
console.log(contarElementos([[]]));
