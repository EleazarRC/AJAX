
var contador = 0;
const cambioDeImagenesAJAX = () => {
  

  

  if(contador == 0){

    muestraImagen1();

  contador = contador + 1;
  } else {
    
    
    muestraImagen2();

  contador = contador - 1;
  }



}


const muestraImagen1 = () => {
  tiempoInicial = new Date();
  borrarPagina();

  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%203/assets/img/img",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
};

const muestraImagen2 = () => {
  tiempoInicial = new Date();
  borrarPagina();

  var cargador = new net.CargadorContenidos(
    "http://localhost/AJAX/Ejercicio%203/assets/img/img2",
    muestraContenido,
    null,
    "POST",
    "&nocache=" + Math.random(),
    "application/x-www-form-urlencoded"
  );
};


//muestraImagen1();















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
