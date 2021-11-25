// #################################################################
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~EVENTOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////
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
//  ~~~~~~~~~~~~~~~~~~~~~~~FIN EVENTOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////


// #################################################################
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AJAX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////
var net = new Object();

var estadosPosibles = [
  "No inicializado",
  "Cargando",
  "Cargado",
  "Interactivo",
  "Completado",
];

var tiempoInicial = 0;

net.READY_STATE_UNINITIALIZED = 0;
net.READY_STATE_LOADING = 1;
net.READY_STATE_LOADED = 2;
net.READY_STATE_INTERACTIVE = 3;
net.READY_STATE_COMPLETE = 4;

/**
 * Función para peticiones AJAX
 * @param {*} url Dirección del recurso
 * @param {*} funcion Función muestraContenido como norma general. (Podemos mandar la respuesta a otra funcion)
 * @param {*} funcionError Hay una función por defecto pero podemos poner otra.
 * @param {*} metodo Metodo POST o GET
 * @param {*} parametros Parametros que se enviaran para el metodo post.
 * @param {*} contentType Cabecera content-type necesaria para el método Post
 */
net.CargadorContenidos = function (
  url,
  funcion,
  funcionError,
  metodo,
  parametros,
  contentType
) {
  this.url = url;
  this.req = null;
  this.onload = funcion;
  this.onerror = funcionError ? funcionError : this.defaultError;
  this.cargaContenidoXML(url, metodo, parametros, contentType);
};

net.CargadorContenidos.prototype = {
  cargaContenidoXML: function (url, metodo, parametros, contentType) {
    if (window.XMLHttpRequest) {
      this.req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      this.req = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (this.req) {
      try {
        var loader = this;
        this.req.onreadystatechange = function () {
          loader.onReadyState.call(loader);
        };
        this.req.open(metodo, url, true);
        if (contentType) {
          this.req.setRequestHeader("Content-Type", contentType);
        }
        this.req.send(parametros);
      } catch (err) {
        this.onerror.call(this);
      }
    }
  },

  onReadyState: function () {
    var req = this.req;
    var ready = req.readyState;
    if (ready == net.READY_STATE_COMPLETE) {
      document.getElementById("cabezeras").innerHTML +=
        this.req.getAllResponseHeaders();
      var httpStatus = req.status;
      if (httpStatus == 200 || httpStatus == 0) {
        this.onload.call(this);
      } else {
        this.onerror.call(this);
      }

      document.getElementById("codigoEstado").innerHTML +=
        this.req.status + "<br/>" + this.req.statusText;
    }
    var tiempoFinal = new Date();
    var miliSegundos = tiempoFinal - tiempoInicial;
    document.getElementById("estadoPeticion").innerHTML +=
      "[" +
      miliSegundos +
      " mseg.] " +
      estadosPosibles[this.req.readyState] +
      "<br/>";
  },

  defaultError: function () {
    alert(
      "Se ha producido un error al obtener los datos" +
        "\n\nreadyState:" +
        this.req.readyState +
        "\nstatus: " +
        this.req.status +
        "\nheaders: " +
        this.req.getAllResponseHeaders()
    );
  },
};

/**
 * Mostramos contenido en el medio de la página
 */
function muestraContenido() {
  var imagen = document.getElementById("img1");
  imagen.src = this.req.responseText;
}
/**
 * Reinicia el contenido de la página
 */
function borrarPagina() {
  document.getElementById("contenidoAjax").innerHTML = "";
  document.getElementById("estadoPeticion").innerHTML = "";
  document.getElementById("codigoEstado").innerHTML = "";
  document.getElementById("cabezeras").innerHTML = "";
}

/**
 * Recoge los datos de un formulario y los prepara para AJAX (Personalizar por cada form)
 * @returns parametros para enviar con el método POST por AJAX
 */
function crea_query_string() {
  var fecha = document.getElementById("fecha_nacimiento");
  var cp = document.getElementById("codigo_postal");
  var telefono = document.getElementById("telefono");

  return "fecha_nacimiento=" + encodeURIComponent(fecha.value) +
         "&codigo_postal=" + encodeURIComponent(cp.value) +
         "&telefono=" + encodeURIComponent(telefono.value) +
         "&nocache=" + Math.random();
}
// #################################################################
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~FIN AJAX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////