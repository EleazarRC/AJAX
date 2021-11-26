// Uti
//var intervalo = null;
function descargaNoticia() {
  borrarPagina();
  intervalo = setInterval(pideDatosServer, 1000);
}

function pideDatosServer() {
  tiempoInicial = new Date();
  borrarPagina();

  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%206/generaContenidos.php",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );

  borrarPagina();
  
}

function pararIntervalo() {
  clearInterval(intervalo);
}
