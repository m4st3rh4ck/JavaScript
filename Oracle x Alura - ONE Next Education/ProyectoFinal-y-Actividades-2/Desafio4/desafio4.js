//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];


/*Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 
'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
 'Java', 'Ruby' y 'GoLang'.*/
lenguajesProgramacion.push("Java");
lenguajesProgramacion.push("Ruby");
lenguajesProgramacion.push("GoLang");



/*Crea una función que muestre en la consola todos los elementos de la
 lista "lenguagesDeProgramacion.*/
function mostraLista() {
    for (let i = 0; i <= lenguajesProgramacion.length; i++) {
        console.log(lenguajesProgramacion[i]);
    }
}

mostraLista();



/*Crea una función que muestre en la consola todos los elementos de la 
lista "lenguagesDeProgramacion en orden inverso.*/
function mostraLista() {
    for (let i = lenguajesProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesProgramacion[i]);
    }
}

mostraLista();



/*Crea una función que calcule el promedio de los elementos en una lista
 de números.*/
let promedios = [10, 10, 10, 6, 6, 8];
let promedio = 0;
let promedio_final = 0;
for (let i = 0; i < promedios.length; i++) {
    promedio = promedio + promedios[i];
}
promedio_final = promedio / promedios.length;
console.log(promedio_final);



/*Crea una función que muestre en la consola el número más grande y el 
número más pequeño en una lista.*/

function numeroGrandePequeño(nums) {
    let pequeño = nums[0];
    let grandote = nums[0];
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] < pequeño) {
            pequeño = nums[i];
        } else if (nums[i] > grandote) {
            grandote = nums[i];
        }
    }
    console.log(`El numero mas pequeño es: ${pequeño}`);
    console.log(`El numero mas grande es: ${grandote}`);
}

let numeros = [20, 14, 15, 18, 19, 16];
numeroGrandePequeño(numeros);


/*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function suma(nums) {
    let acomulador = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        acomulador += nums[i];

    }
    console.log(`La suma de ${nums} es: ${acomulador}`);
}
let numeros = [1, 3, 5, 7, 9, 8, 6, 4, 2];
suma(numeros);

/*Crea una función que devuelva la posición en la lista donde se encuentra
 un elemento pasado como parámetro, o -1 si no existe en la lista.*/

function posicion(posi, list){
    let i = 0;
    let found = false;
    while(i <= list.length-1)
    {
        if(posi == list[i]){
            console.log(`${posi} si esta y esta en la posicion ${list[i]}`);
            found = true;
            break;
        }else(posi != list[i])
        {
         console.log(`${posi} no esta en la posicion ${list[i]}`);   
        }
        i++;
    }

}


let lista = [1,2,3,4,5];
let pos = parseInt(prompt("Ingresa un valor numerico: "));
posicion(pos, lista);

/*Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.*/
function sumaListas(list1,list2)
{
    let sumas = [];
    let sumass = 0;
    if(list1.length != list2.length )
        {
            console.log(`Error, las listas deben ser del mismo tamaño`);
        }else{
            for(let i = 0; i < list1.length; i++)
                {
                   sumas.push(list1[i] + list2[i]);
                }
          console.log(`${sumas}`);
        }
}
let lista1 = [1,2,3];
let lista2 = [1,2,3];

sumaListas(lista1,lista2);
  

/*Crea una función que reciba una lista de números y devuelva una nueva
lista con el cuadrado de cada número.*/
function cuadradoss(nums){
    for(let i = 0; i <= nums.length - 1; i++){
        cuadrado = nums[i] * nums[i];
        cuadrados.push(cuadrado);
    }
    console.log(`Los cuadrados de ${numeros}, son ${cuadrados}`);
}

let numeros = [1,2,3];
let cuadrados = [];
let cuadrado = 0;
cuadradoss(numeros);