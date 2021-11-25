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

// Creamos un objeto para AJAX, para poder reitilizarlo más facilmente.
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

// Constructor
net.CargadorContenidos = function (url, funcion, funcionError) {
  this.url = url;
  this.req = null;
  this.onload = funcion;
  this.onerror = funcionError ? funcionError : this.defaultError;
  this.cargaContenidoXML(url);
};

net.CargadorContenidos.prototype = {
  cargaContenidoXML: function (url) {
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
        this.req.open("GET", url, true);
        this.req.send(null);
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

function muestraContenido() {
  document.getElementById("contenidoAjax").innerHTML = this.req.responseText;
}

function borrarPagina() {
  document.getElementById("contenidoAjax").innerHTML = "";
  document.getElementById("estadoPeticion").innerHTML = "";
  document.getElementById("codigoEstado").innerHTML = "";
  document.getElementById("cabezeras").innerHTML = "";
}
