<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$json = file_get_contents('php://input');
$id = json_decode($json, true);
intval($id);
var_dump("id is ", $id);

if(INTERNAL){
  exit();
};

?>
