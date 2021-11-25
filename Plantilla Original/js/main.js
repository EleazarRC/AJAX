const muestraDatos = () => {
  tiempoInicial = new Date();
  borrarPagina();

  //cargaContenido("http://127.0.0.1:5500/Plantilla/datos.txt", "GET", muestraContenido);"
  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Plantilla%203/datos.txt",
    muestraContenido,
    null,
    "GET",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
};

// #################################################################
//  ~~~~~~~~~~~~~~~~~~~ Información Página ~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////

const muestraDatosUsuario = () => {
  tiempoInicial = new Date();
  borrarPagina();
  var recurso = document.getElementById("recurso").value;
  var cargador = new net.CargadorContenidos(
    recurso,
    muestraContenido,
    null,
    "GET",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
};

var intervalo = null;
function descargaNoticia() {
  borrarPagina();

  intervalo = setInterval(pideDatosServer, 1000);

  // var recurso = 'http://localhost/AJAX/Plantilla%202/generaContenidos.php'+'?nocache='+Math.random();
  // var cargador = new net.CargadorContenidos(recurso, muestraContenido);
}

function pideDatosServer() {
  tiempoInicial = new Date();
  borrarPagina();
  var recurso =
    "http://localhost/AJAX/Plantilla%203/generaContenidos.php" +
    "?nocache=" +
    Math.random();
  var cargador = new net.CargadorContenidos(recurso, muestraContenido);
}

function pararIntervalo() {
  clearInterval(intervalo);
}

const validarDatosServer = () => {

   var parametros = crea_query_string();

    var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Plantilla%203/validaDatos.php",
    muestraContenido,
    null,
    "POST",
    parametros,
    "application/x-www-form-urlencoded"
  );
    
}

function crea_query_string() {
  var fecha = document.getElementById("fecha_nacimiento");
  var cp = document.getElementById("codigo_postal");
  var telefono = document.getElementById("telefono");

  return "fecha_nacimiento=" + encodeURIComponent(fecha.value) +
         "&codigo_postal=" + encodeURIComponent(cp.value) +
         "&telefono=" + encodeURIComponent(telefono.value) +
         "&nocache=" + Math.random();
}