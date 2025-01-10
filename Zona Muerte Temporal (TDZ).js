/*
Ejercicio
Modifica la función a para que no se produzca un error 
de referencia al acceder a la variable x antes de su inicialización,
mostrando undefined en la consola.

No cambies el alcance de la variable x
*/

const a = function() {
  var x // Se modifico esta linea de "let" a "var"
  console.log(x); 
  x = 5
}

a()

try {
  console.log(x)
} catch (e) {
  console.log(e.message)
}
