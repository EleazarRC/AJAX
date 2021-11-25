window.onload = function () {
  
  // ELEMENTOS
   const pagina1 = document.getElementById('pagina1');
   const pagina2 = document.getElementById('pagina2');

  // EVENTOS preparados para la función listener
  const onClick = "click";
  const onMouseover = "mouseover";
  const onMouseout = "mouseout";
  const onKeypress = "keypress";

  // LISTENERS
  listener(pagina1, onClick , mostrarPagina1);
  listener(pagina2, onClick , mostrarPagina2);


};
