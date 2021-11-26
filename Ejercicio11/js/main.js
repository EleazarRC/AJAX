
var imagen = document.getElementById("gif");
imagen.style.display = "none";


function pideDatosServer() {
  tiempoInicial = new Date();
  borrarPagina();


  tiempoInicial = new Date();
  borrarPagina();
  imagen.style.display = "block";
  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio11/assets/img/miGif",
    muestraContenidoImagen,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
  
  borrarPagina();

  setTimeout(function(){
    var parametros = "hola=MeHasLLamadoViaPost&nocache=" + Math.random();
  
    var cargador = new net.CargadorContenidos( 
      "http://localhost/AJAX/Ejercicio%209/validaDatos.php",
      muestraContenido,
      null,
      "POST",
      parametros,
      "application/x-www-form-urlencoded"
    );
    imagen.style.display = "none";
    borrarPagina();
},1000);




    
    
  }





/*function pararIntervalo() {
  clearInterval(intervalo);
}
*/