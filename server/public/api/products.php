<?php
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
$output = file_get_contents('dummy-products-list.json');
print($output);

if(!$conn){
  throw new Exception(mysqli_connect_error());
}

?>
