/*Los selectores son metodos que me permiten trabajar en javascript, 
elementos de un html o css*/
//let titulo = document.querySelector('h1'); //DOM (document object model)
//Con este selector estoy diciendo que voy a trabajar con el elemento h1 
//titulo.innerHTML = "Juego del numero Secreto";

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Ingresa un numero del 1 al 10";


/*Los comentarios anteriores hacen lo mismo que el codigo que sigue a continuacion
apartir de este comentario, la unica diferencia es que se una funciones con parametros
para que en vez de estar usando DOM e innerHTML para cada elemento del HTML por seprado
se haga de una manera mas optima*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //DOM (document object model)
    //Con este selector estoy diciendo que voy a trabajar con el elemento h1 
    elementoHTML.innerHTML = texto;
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamo todos los numero...
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numero posibles");
    } else {
        /*Si el numero generado esta en la lista */
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else { //Si no esta...
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Mando a llamar la funcion que defini en HTML, onclick="intentoDeUsuario();"
function verificarIntento() {
    let numeroIntroducido = parseInt(document.getElementById("numeroIntroducido").value);
    /*Puse parseInt porque lo que se introuce, enctra como cadena, con parseInt garantizo que entre
    como valor numerico*/
    //console.log(numeroSecreto);
    //console.log(typeof (numeroSecreto)); //Con typeof puedo ver que tipo de dato es una variable
    //console.log(typeof (numeroIntroducido)); //Con typeof puedo ver que tipo de dato es una variable
    if (numeroIntroducido === numeroSecreto) {
        /*  === se asegura que el contenido sea el mismo numero/texto y el mismo tipo de dato */
        asignarTextoElemento("p", `Acertaste el numero en el intento ${intentos}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if (numeroIntroducido > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

/*Esta funcion es para limpiar la caja de los numeros introducidos, cada vez
que se introduzca un numero distinto, la caja borrara el numero que pusimos*/
function limpiarCaja() {
    let valorCaja = document.querySelector("#numeroIntroducido");
    //Con # seleccionamos el elemento que queremos modificar por su id
    valorCaja.value = ""; // "Limpia la caja"

}

function condicionesIniciales() {
    asignarTextoElemento("h1", 'Juego del numero Secreto!');
    asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}


/*Inicia un nuevo juego*/
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //genera el numero aleatorio
    //inicializar el numero de intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();