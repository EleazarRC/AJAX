<?php

$miPOST = isset($_POST["hola"]) ? print $_POST["hola"] : "";

$DateAndTime = date('m-d-Y h:i:s a', time());

echo "</br>";
echo "The current date and time are $DateAndTime.";

?>