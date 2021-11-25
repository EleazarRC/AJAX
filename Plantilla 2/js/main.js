const muestraDatos = () => {
    tiempoInicial = new Date();
    borrarPagina();
    
    //cargaContenido("http://127.0.0.1:5500/Plantilla/datos.txt", "GET", muestraContenido);
    var cargador = new net.CargadorContenidos("http://localhost/AJAX/Plantilla%202/datos.txt", muestraContenido);

};

// #################################################################
//  ~~~~~~~~~~~~~~~~~~~ Información Página ~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////

const muestraDatosUsuario = () => {
    tiempoInicial = new Date();
    borrarPagina();
    var recurso = document.getElementById('recurso').value;
    var cargador = new net.CargadorContenidos(recurso, muestraContenido);


};


var intervalo = null;
function descargaNoticia(){

    borrarPagina();

    
    intervalo = setInterval(pideDatosServer, 1000);

   // var recurso = 'http://localhost/AJAX/Plantilla%202/generaContenidos.php'+'?nocache='+Math.random();
   // var cargador = new net.CargadorContenidos(recurso, muestraContenido);

}

function pideDatosServer() {

    tiempoInicial = new Date();
    borrarPagina();
    var recurso = 'http://localhost/AJAX/Plantilla%202/generaContenidos.php'+'?nocache='+Math.random();
    var cargador = new net.CargadorContenidos(recurso, muestraContenido);
    
    
}

function pararIntervalo() {

    clearInterval(intervalo);
}