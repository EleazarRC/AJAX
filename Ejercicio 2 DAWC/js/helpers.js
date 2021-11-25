
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

/**
 * Sacar datos con AJAX 
 * @param {*} datos Ubicación de los datos en el servidor
 * @param {*} idDiv Div Donde mostraremos los datos.
 */
function sacarDatos(datos, idDiv) {

  // AJAX

// Iniciamos el objeto como false para verificar seguidamente si se ha creado correctamente.
var XMLHttpRequestObject = false;

// Comprobamos el tipo de navegador para iniciar correctamente el objeto.
if (window.XMLHttpRequest) {
  XMLHttpRequestObject = new XMLHttpRequest(); // La mayoría de navegadores.
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP"); // Versiones antiguas de internet explorer.
}

if (XMLHttpRequestObject) { // Comprobamos que el objeto se ha creado correctamente.

  var lugar = document.getElementById(idDiv);

  XMLHttpRequestObject.open("GET", datos); // Llamamos al método del objeto y le pasamos los parametros. (POST para que no viajen los datos por la url)

  XMLHttpRequestObject.onreadystatechange = function () { // Aquí usamos una función anónima pero podríamos usar llamar a una función normal. XMLHttpRequest.onreadystatechange = respuesta; (respuesta sería la función ha ejecutar.)

    if (

      XMLHttpRequestObject.readyState == 4 && // Se han terminado de recibir los datos 0 -> Sin iniciar, 1 -> abierto, 2 -> cabeceras recibidas, 3 -> cargando, 4 -> completado
      XMLHttpRequestObject.status == 200 // La comunicación con la url ha sido correcta 200 OK 404 not found

    ) {

      lugar.innerHTML = XMLHttpRequestObject.responseText; // Insertamos los datos en texto plano con el metodo responseText de objeto. Mediante innerhtml.
      
    }

  };

  XMLHttpRequestObject.send(null); // Conviene enviar null al servidor porque en algunos navegadores da error.

}
}
