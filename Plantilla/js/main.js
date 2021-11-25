const muestraDatos = () => {
    tiempoInicial = new Date();
    borrarPagina();
    
    cargaContenido("http://127.0.0.1:5500/Plantilla/datos.txt", "GET", muestraContenido);
    

};

// #################################################################
//  ~~~~~~~~~~~~~~~~~~~ Información Página ~~~~~~~~~~~~~~~~~~~~~~~~~
// #################################################################
///////////////////////////////////////////////////////////////////

const muestraDatosUsuario = () => {
    tiempoInicial = new Date();
    borrarPagina();
    var recurso = document.getElementById('recurso').value;
    cargaContenido( recurso, "GET", muestraContenido);
    

};