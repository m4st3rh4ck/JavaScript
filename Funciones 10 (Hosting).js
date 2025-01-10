/*                   Ejercicio
Modifica la función demostrarHoisting para que muestre
el efecto del hoisting con variables var. La función debe
mostrar undefined en la consola al acceder a la variable x 
antes de su inicialización.*/

const demostrarHoisting = function() {
  console.log(x); 
   var x = 5 // Se agregó var
}

demostrarHoisting()

try {
  console.log(x)
} catch (e) {
  console.log(e.message)
}
