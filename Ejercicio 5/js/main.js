const muestraDatos = () => {
  tiempoInicial = new Date();
  borrarPagina();

  //cargaContenido("http://127.0.0.1:5500/Plantilla/datos.txt", "GET", muestraContenido);"
  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%205/js.js",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );


    //eval(cargador);


};


















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
