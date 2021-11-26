// Uti
//var intervalo = null;
/*function descargaNoticia() {
  borrarPagina();
  intervalo = setInterval(pideDatosServer, 1000);
}*/

function pideDatosServer() {
  tiempoInicial = new Date();
  borrarPagina();


    var parametros = "hola=MeHasLLamadoViaPost&nocache=" + Math.random();
  
    var cargador = new net.CargadorContenidos( 
      "http://localhost/AJAX/Ejercicio%209/validaDatos.php",
      muestraContenido,
      null,
      "POST",
      parametros,
      "application/x-www-form-urlencoded"
    );
  
    borrarPagina();
    
  }





/*function pararIntervalo() {
  clearInterval(intervalo);
}
*/