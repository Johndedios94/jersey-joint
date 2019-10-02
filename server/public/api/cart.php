<?php
require_once('functions.php');
session_start();
set_exception_handler('error_handling');
// header('Content-Type: application/json');
require_once('db_connection.php');
startup();
// $method = $_SERVER['REQUEST_METHOD'];
// $item = file_get_contents('php://input');
define("INTERNAL", true);

switch($_SERVER["REQUEST_METHOD"]){
  case "GET":
  var_dump("get");
  require_once('cart_get.php');
  break;
  case "POST":
  var_dump("post");
  require_once('cart_add.php');
  break;
}

// if($_SERVER["REQUEST_METHOD"]='GET'){
//   require_once('cart_add.php');
// } else($_SERVER["REQUEST_METHOD"] = 'POST'){
//   require_once('cart_get.php');
// }


// if ($method == 'GET') {
//   readfile('dummy-cart-items.json');
// } else if ($method == 'POST') {
//   http_response_code(201);
//   print($item);
// } else {
//   http_response_code(404);
//   print(json_encode([
//     'error' => 'Not Found',
//     'message' => "Cannot $method /api/cart.php"
//   ]));
// }

?>
