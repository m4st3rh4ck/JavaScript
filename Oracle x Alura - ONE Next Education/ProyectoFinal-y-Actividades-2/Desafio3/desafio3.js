//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir
//  de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function imc(height,weight){
    return weight / (height * height);
}

let altura = parseFloat(prompt("Ingresa tu altura (En metros): "));
let peso = parseFloat(prompt("Ingresa tu peso (En Kilogramos): "));
console.log(imc(altura,peso));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num){
    let resultado = 1;
    while(num > 1){
        resultado = resultado * (num);
        num--;
    }
    return resultado;
}

let numero = parseInt(prompt("Ingresa un numero: "));
console.log(`El factorial de ${numero} es ${factorial(numero)}`);


//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el 
// valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del
//  dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirMoneda(dolar){
    return dolar * 4.80;
}

let monedaLocal = parseFloat(prompt("Ingresa la cantidad a convertir en dolares: "));
console.log(`${monedaLocal} en dolares, son ${convertirMoneda(monedaLocal)}`);




//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros.
function salaRectangular(alt,anch){
    perimetro = (2 * alt) + (2 * anch);
    area = anch * alt;
    console.log(`El area es: ${area} y el perimetro es: ${perimetro}`);
    
}
let perimetro = 0;
let area = 0;
let altura = parseFloat(prompt("Introduce la altura: "));
let anchura = parseFloat(prompt("Introduce la anchura: "));
salaRectangular(altura,anchura);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function circulo(rad){
    perimetro = 2 * 3.14 * rad;
    area = 3.14 * (rad * rad);
    console.log(`El area del circulo es: ${area} y el perimetro es: ${perimetro}`);
}
let area = 0;
let perimetro = 0;
let radio = parseFloat(prompt("Introduce el radio del circulo: "));
circulo(radio);

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado 
como parámetro.*/
function multiplicacion(num){
    while(contador <= 10){
        resultado = numero * contador;
        console.log(`${num} x ${contador} = ${resultado}`);
        contador++;
    }
   
}
let contador = 0;
let numero = parseInt(prompt("Ingresa un numero"));
multiplicacion(numero);