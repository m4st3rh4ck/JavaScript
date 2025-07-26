// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = []; //Lista donde voy a guardar los nombres introducidos
let contador = 0;


function agregarAmigo() {
    if (contador < 5) {
        let nombreIntroducido = document.getElementById("añadiramigo").value.trim(); //trim() para eliminar espacios al principio y final del nombre
        //!/^[a-zA-Z\s]+$/.test(nombreIntroducido) para garantizar que solo se introduzcan nombres 
        if (nombreIntroducido === "" || !/^[a-zA-Z\s]+$/.test(nombreIntroducido)) {
            alert("Ingresa un nombre por favor");
        } else {
            //Agrega el nombre introducido a la lista
            listaNombres.push(nombreIntroducido);
            //muestra el nombre de la pocision contador
            asignarTextoElemento(".amigos-ingresados", listaNombres.join("<br>"));
            //Aumentamos en uno, para pasar al siguiente nombre
            contador++;
            //Para que despues de introducir un nombre, se limpie la cajapara introducir otro nombre
            document.getElementById("añadiramigo").value = "";
        }
    } else {
        //Si ya introducimos 5 nombre, que es el maximo, ya no se podra meter mas nombres
        alert("Numero maximo de amigos permitido");
    }
}

function sortearAmigo(){
    /*
    Agrego un if que verificara que se hayan introducido 5 amigos antes
    de hacer el sorteo
    */ 
    if(contador < 5){
        alert("Debes ingresar 5 nombres")
    }else{
      //Se selecciona una posicion de la lista de forma aleatoria  
      let amigoSorteado = Math.floor(Math.random() * listaNombres.length);
      //Se guarda la posicion aleatoria generada
      let amigoSeleccionado = listaNombres[amigoSorteado];
      //Se muestra el nombre de la posicion aleatoria generada
      asignarTextoElemento(".amigo-secreto", `El amigo secreto es: ${amigoSeleccionado}`);
         }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //DOM (document object model)
    //Con este selector estoy diciendo que voy a trabajar con el elemento h1 
    elementoHTML.innerHTML = texto;
}

