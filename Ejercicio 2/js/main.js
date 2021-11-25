const mostrarPagina1 = () => {

  tiempoInicial = new Date();
  borrarPagina();

  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%202/1.html",
    muestraContenido,
    null,
    "GET",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );

}

const mostrarPagina2 = () => {
  
  tiempoInicial = new Date();
  borrarPagina();
  
  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%202/2.html",
    muestraContenido,
    null,
    "GET",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
}


















// EJEMPLO
/*const muestraDatos = () => {
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
};*/
