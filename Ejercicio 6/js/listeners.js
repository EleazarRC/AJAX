
// Me he dado cuenta tarde que esto podría haberlo hecho 
// con un for y automáticamente por cada ejercicio
// Si tengo tiempo lo actualizaré
window.onload = function() {
    // ELEMENTOS
  
  const datosServer = document.getElementById('datosServer');
  const borrarPaginaBtn = document.getElementById('borrarPaginaBtn');
  const pararDatosServer = document.getElementById('pararDatosServer');


  // EVENTOS preparados para la función listener
  const onClick = "click";
  const onMouseover = "mouseover";
  const onMouseout = "mouseout";
  const onKeypress = "keypress";

  // LISTENERS

 listener(borrarPaginaBtn, onClick , borrarPagina);
 listener(datosServer, onClick , descargaNoticia);
 listener(pararDatosServer, onClick , pararIntervalo);


}

