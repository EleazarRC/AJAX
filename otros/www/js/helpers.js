
/**
 * Función para compatibilizar la escucha de eventos en cualquier navegador web.
 * @param {object} elemento Elemento al que queremos escuchar.
 * @param {string} evento Evento que queremos escuchar en el elemento. Hay constantes preparadas en helper.js
 * @param {function} funcion Función que queremos que se ejecute cuando ocurra el evento en el elemento.
 */
function listener(elemento, evento, funcion) {
  if (document.addEventListener) {
    elemento.addEventListener(evento, funcion, false);
  } else {
    elemento.attachEvent("on" + evento, funcion);
  }
}

