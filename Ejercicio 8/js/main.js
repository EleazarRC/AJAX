// Uti
//var intervalo = null;
/*function descargaNoticia() {
  borrarPagina();
  intervalo = setInterval(pideDatosServer, 1000);
}*/

function pideDatosServer() {
  tiempoInicial = new Date();
  borrarPagina();

  var cargador = new net.CargadorContenidos( //MANDO EL GET POR EL ENLACE
    "http://localhost/AJAX/Ejercicio%208/validaDatos.php?hola=hola",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );

  borrarPagina();
  
}

/*function pararIntervalo() {
  clearInterval(intervalo);
}
*/