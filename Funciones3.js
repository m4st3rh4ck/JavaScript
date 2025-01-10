/*                                      Ejercicio
La función setTimeout es una función que ejecuta una función después de un cierto tiempo. 
En teoría, en el siguiente código se debería mostrar "Tarea 1 ejecutada", "Tarea 2 ejecutada" y "Tarea 3 ejecutada" 
en ese orden. Sin embargo, debido al uso de var, obtendremos un resultado inesperado. Puesto que la tarea no se está 
ejecutando y var i se está incrementando en cada iteración, cuando se ejecuta la tarea, i ya tiene el valor de 4.

Modifica la función para solucionar esto.
*/
function programarTareas() {
  for (let i = 1; i <= 3; i++) { // Se hizo modificacion de var a let 
    setTimeout(function() {
      console.log("Tarea " + i + " ejecutada");
    }, i * 100);
  }
  return "Todas las tareas han sido programadas";
}
/*La diferencia entre var y let es que let se limita a bloques de codigo especifico com en un if, for, etc
mientras que var afecta a todo un bloque de codigo en general*/
