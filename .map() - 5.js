/*
Ejercicio
Crea la función obtenerPrecios, la cual debe recibir un array de objetos que representan productos y devolver un nuevo array que contenga únicamente los precios de esos productos.

const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Móvil", precio: 500, descuento: 50 },
  { nombre: "Tablet", precio: 200 }
];

console.log(obtenerPrecios(productos)); // [1000, 500, 200]
*/

function obtenerPrecios(productos) {
    return productos.map(function(producto) {
        return producto.precio;
    });
}

/* Fin */

const productosElectronica = [
  { nombre: "Televisor", precio: 1200 },
  { nombre: "Auriculares", precio: 150 },
  { nombre: "Cámara", precio: 800 }
];

const productosHogar = [
  { nombre: "Sofá", precio: 950 },
  { nombre: "Mesa", precio: 300 },
  { nombre: "Lámpara", precio: 120 }
];

console.log(obtenerPrecios(productosElectronica));
console.log(obtenerPrecios(productosHogar));
