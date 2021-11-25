
/**
 * Función para compatibilizar la escucha de eventos en cualquier navegador web.
 * @param {object} elemento Elemento al que queremos escuchar.
 * @param {string} evento Evento que queremos escuchar en el elemento. Hay constantes preparadas en helper.js
 * @param {function} funcion Función que queremos que se ejecute cuando ocurra el evento en el elemento.
 */
function listener(elemento, evento, funcion) {
  if (document.addEventListener) {
    elemento.addEventListener(evento, funcion, false);
  } else {
    elemento.attachEvent("on" + evento, funcion);
  }
}





// #################################################################
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AJAX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////

// El servidor solo respondera con los siguientes estados: 0,1,2,3,4
// Los ponemos en variables que son más legibles para nosotros para
// una mejor lectura y mantenimiento del código.
var READY_STATE_UNINITIALIZED=0;
var READY_STATE_LOADING=1;
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3;
var READY_STATE_COMPLETE=4;

// En la siguiente variable almacenaremos de forma GLOBAL
// El objeto XMLHttpRequest para que sea accesible por todas
// las funciones.
var peticion_http;

// Lugar donde mostraremos el contenido TODO: Refactorizar
var lugar = document.getElementById("contenidoAjax");

/**
 * Función generica para la carga de contenidos AJAX
 * @param {*} url url del contenido que se va a cargar.
 * @param {*} metodo método utilizado para realizar la petición HTTP
 * @param {*} funcion Referencia a la función que procesa la respuesta del servidor
 */
function cargaContenido(url, metodo, funcion) {
  
  peticion_http = inicializa_xhr(); // Inicializa XMLHttpRequest 

  if(peticion_http) { 
    
    peticion_http.onreadystatechange = funcion; //Establecemos la función que procesa la respuesta del servidor
    peticion_http.open(metodo, url+'?nocache='+Math.random(), true); // Realizamos la petición al servidor
    peticion_http.send(null);
  }
}

/**
 * Encapsulamos la creación del objeto XMLHttpRequest
 * @returns XMLHttpRequest
 */
function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

/**
 * Función para comprobar que está todo correcto y enviar la información
 */
function muestraContenido() {
  if(peticion_http.readyState == READY_STATE_COMPLETE) {
    if(peticion_http.status == 200) {
      //alert(peticion_http.responseText);
      document.getElementById("cabezeras").innerHTML += peticion_http.getAllResponseHeaders();
      document.getElementById("codigoEstado").innerHTML += peticion_http.status + "<br/>" + peticion_http.statusText;

      lugar.innerHTML = peticion_http.responseText; // .transformaCaracteresEspeciales() Con esta opción carga el contenido texto plano aunque sea html
    }
  }
  // LO QUE NO ENTIENDO AQUÍ ES POR QUE PASA 4 VECES
  var tiempoFinal = new Date();
  var miliSegundos = tiempoFinal - tiempoInicial;
  document.getElementById("estadoPeticion").innerHTML +=
    "[" + miliSegundos + " mseg.] " + estadosPosibles[peticion_http.readyState] + "<br/>";
}

//function descargaArchivo() {
 
  // He probado esta función y si cargo una página html me carga el contenido en 
  // Texto plano si no me carga el contenido en html
  String.prototype.transformaCaracteresEspeciales = function () {
    return unescape(
      escape(this)
        .replace(/%0A/g, "<br/>")
        .replace(/%3C/g, "&lt;")
        .replace(/%3E/g, "&gt;")
    );
  };
  
  var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
  var tiempoInicial = 0;
  
  function borrarPagina() {
      document.getElementById("contenidoAjax").innerHTML = "";
      document.getElementById("estadoPeticion").innerHTML = "";
      document.getElementById("codigoEstado").innerHTML = "";
      document.getElementById("cabezeras").innerHTML = "" ;
      
  }