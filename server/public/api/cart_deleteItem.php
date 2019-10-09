<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();


$bodyData = getBodyData();
$id = intval($bodyData["id"]);


$query = "DELETE FROM cartItems WHERE cartItems.productID = $id";

mysqli_query($conn, $query);
