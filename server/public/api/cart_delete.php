<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();


$query = "DELETE FROM `cartItems`";

mysqli_query($conn, $query);


?>
