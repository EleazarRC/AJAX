<?php

$miGET = isset($_GET["hola"]) ? print $_GET["hola"] : "";

$DateAndTime = date('m-d-Y h:i:s a', time());

echo "</br>";
echo "The current date and time are $DateAndTime.";

echo "<h1> HOLA MUNDO</h1>";

?>