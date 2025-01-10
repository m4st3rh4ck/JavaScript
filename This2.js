/*                                           Ejercicio
Crea el objeto punto con las propiedades x e y, que representan coordenadas en un plano cartesiano. Luego,
agrega el método moverA(x, y) que modifica las coordenadas del objeto puntos. Finalmente, agrega el método 
dondeEstoy() que muestra las coordenadas actuales del objeto en la forma (x, y).                           */

punto = {
    x: 0, 
    y: 0, 

    moverA: function (x, y) {
        this.x = x;
        this.y = y;
    },

    dondeEstoy: function () {
        return `(${this.x}, ${this.y})`;
    }
};

punto.moverA(2, 3);
console.log(punto.dondeEstoy()); // Imprime (2, 3)

punto.moverA(5, 7);
console.log(punto.dondeEstoy()); // Imprime (5, 7)

punto.moverA(0, 0);
console.log(punto.dondeEstoy()); // Imprime (0, 0)
