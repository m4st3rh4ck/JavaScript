/*                                         Ejercicio
Crea una arrow function llamada concatenarConEspacio que tome tres parámetros texto1, texto2 y texto3, 
y devuelva estos tres textos concatenados, separados por un espacio.

Ejemplos de uso:

console.log(concatenarConEspacio("Hola", "Mundo", "JS")); // Debería imprimir: Hola Mundo JS */

const concatenarConEspacio = (texto1, texto2, texto3) => {
    return texto1 + " " + texto2 + " " + texto3;
}

console.log(concatenarConEspacio("Hola", "Mundo", "JS")); // Imprime: Hola Mundo JS
console.log(concatenarConEspacio("Aprender", "JavaScript", "es divertido")); // Imprime: Aprender JavaScript es divertido
console.log(concatenarConEspacio("Función", "Flecha", "Exitosa")); // Imprime: Función Flecha Exitosa

