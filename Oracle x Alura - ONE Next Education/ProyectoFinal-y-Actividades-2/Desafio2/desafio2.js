//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("Hola Mundo");
}

//Crear una función que reciba un nombre como parámetro y muestre 
// "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre){
    console.log(`¡Hola, ${nombre}`);
}
let nombre = prompt("Introduce tu nomnre: ");
holaNombre(nombre);


//Crear una función que reciba un número como parámetro y devuelva el doble
//  de ese número.
let doble = 0;
function dobleNumero(numero){
    doble = numero * 2;
    return doble;
}

let numero = prompt("Introduce un numero: ");
console.log(`dEl doble de ${numero} es: ${dobleNumero(numero)}`);


//Crear una función que reciba tres números como parámetros y devuelva su
//  promedio.
function promedio(num1,num2,num3){
    return (num1 + num2 + num3) / 3;
}
let contador = 1;
let numeros = [];
while(contador <= 3){
    let entrada = prompt(`Introduce el numero ${contador}: `);
    let numero = parseFloat(entrada);
    numeros.push(numero);
    contador++;
}
console.log(`El promedio de ${numeros[0]}, ${numeros[1]} y ${numeros[2]} es: ${promedio( ${numeros[0]}, ${numeros[1]}, ${numeros[2]})}`);

//Crear una función que reciba dos números como parámetros y devuelva el 
// mayor de ellos.
function numeroMayor(num1,num2){
    if(num1 > num2){
        console.log(`${num1} es mayor a ${num2}`);
    }else if(num1 < num2){
         console.log(`${num1} es menor a ${num2}`);
    }else{
         console.log(`${num1} es igual a ${num2}`);
    }
}
let contador = 1;
let numeros = [];
while(contador <= 2){
    let entrada = prompt(`Introduce el numero ${contador}: `);
    let numero = parseFloat(entrada);
    numeros.push(numero);
    contador ++;
}
numeroMayor(numeros[0], numeros[1]);


//Crear una función que reciba un número como parámetro y devuelva el 
// resultado de multiplicar ese número por sí mismo.

function multiplicacion(numero){
        return numero * numero;
}
let num = parseFloat(prompt("Introduce un numero: "));
console.log(multiplicacion(num));