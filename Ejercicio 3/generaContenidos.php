<?php
// Frases de contenido de las que se selecciona aleatoriamente una de ellas
$frases = array("<p>ELEAZAR</p>",
                "<p>Nayara</p>",
                "<p>Juamba</p>",
                "<p>Loli</p>",
                "<p>Enrique</p>",
             );

// Generar un n�mero aleatorio comprendido entre 0 y el n�mero total de frases disponibles
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, count($frases)-1);

// La respuesta de este script consiste en una frase seleccionada aleatoriamente
echo $frases[$numeroAleatorio];
?>