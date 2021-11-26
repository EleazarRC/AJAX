window.onload = function () {
  
  // ELEMENTOS
  const datos = document.getElementById('datos');

  // EVENTOS preparados para la función listener
  const onClick = "click";
  const onMouseover = "mouseover";
  const onMouseout = "mouseout";
  const onKeypress = "keypress";

  // LISTENERS
  listener(datos, onClick , muestraDatos);


};
