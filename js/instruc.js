var instrucciones = ["Arrastrar las piezas hacia el contenedor amarillo para armar el rompecabezas", "Puede usar la imagen de la seccion 'Objetivo' como guía"];

function mostrarInstrucciones(instrucciones) {
  for (var i=0; i<instrucciones.length;i++){
    var instruccion = instrucciones[i];
    mostrarInstruccionEnLista(instruccion, "lista-instrucciones");   
  }   
}

function mostrarInstruccionEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);
}

function iniciar() {
    mostrarInstrucciones(instrucciones);
}

// Ejecutamos la función iniciar
iniciar();