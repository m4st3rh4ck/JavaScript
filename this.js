/*Crear un objeto llamado persona que represente a una persona con atributos como nombre y edad, 
y métodos que permitan presentarse y actualizar su edad al cumplir años. El programa debe mostrar 
cómo una persona se presenta antes y después de cumplir años, reflejando el cambio en la edad.*/

persona = { //Creacion de objeto persona 
  nombre: "Ana", //Atributo nombre
  edad: 30, // Atributo edad
  presentarse: function() {
    return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
  },
  cumplir: function() {
    console.log("Antes de cumplir años: " + edad);
    this.edad += 1;
    console.log("Después de cumplir años: " + edad);
  }
};

console.log(persona.presentarse()); // "Hola, soy Ana y tengo 30 años."
persona.cumplir();
// Antes de cumplir años: 30
// Después de cumplir años: 31
console.log(persona.presentarse()); // "Hola, soy Ana y tengo 31 años."
