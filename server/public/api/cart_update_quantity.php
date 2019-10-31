<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$bodyData = getBodyData();
$Id = intval($bodyData["id"]);
$count = $bodyData["count"];


$query = "UPDATE cartItems SET count = $count WHERE productID = $Id";

mysqli_query($conn, $query);



?>
