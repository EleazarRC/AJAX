window.onload = function () {
  
  // ELEMENTOS
  const cambarImagenes = document.getElementById('cambarImagenes');

  // EVENTOS preparados para la función listener
  const onClick = "click";
  const onMouseover = "mouseover";
  const onMouseout = "mouseout";
  const onKeypress = "keypress";

  // LISTENERS
  listener(cambarImagenes, onClick , cambioDeImagenesAJAX);
  muestraImagen1();

};
