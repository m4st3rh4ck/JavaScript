/*                      Ejercicio
Crea el objeto calculadora con los métodos sumar, restar, 
multiplicar y dividir. Cada método debe recibir dos parámetros y 
devolver el resultado de la operación correspondiente:

sumar(a, b): un método que retorna la suma de a y b
restar(a, b): un método que retorna la resta de a menos b
multiplicar(a, b): un método que retorna el producto de a y b
dividir(a, b): un método que retorna el cociente de a dividido por b */

calculadora = {

    sumar : function(a, b)
    {
        return a + b;
    },
    restar : function(a, b)
    {
        return a - b;
    },
    multiplicar : function(a, b)
    {
        return a * b;
    },
    dividir : function(a, b)
    {
        return a / b;
    }
}

console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(10, 4));
console.log(calculadora.multiplicar(3, 7));
console.log(calculadora.dividir(15, 3));
