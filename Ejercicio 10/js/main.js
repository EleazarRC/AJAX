
const muestraDatos = () => {

  console.log("HOLA");

  tiempoInicial = new Date();
  borrarPagina();

  //cargaContenido("http://127.0.0.1:5500/Plantilla/datos.txt", "GET", muestraContenido);"
  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%2010/datos.json",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/json"
  );
}


// Para profundizar más sobre xml https://uniwebsidad.com/libros/ajax/capitulo-7/aplicaciones-complejas














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
