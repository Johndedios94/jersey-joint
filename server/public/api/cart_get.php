<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$json = file_get_contents('php://input');
$id = json_decode($json, true);
intval($id);
$id = $id['id'];


$cartID = null;
if (empty($_SESSION['cartId'])) {
  print(json_encode([]));
  exit();
} else {
  $cartID = $_SESSION['cartId'];
  $query = "SELECT cartItems.count, products.id, products.name, products.price, products.shortDescription, images.url FROM `cartItems` JOIN `products` ON cartItems.productID = products.id JOIN `images` ON `products`.id = images.productId WHERE cartItems.id IN (1) LIMIT 1";
  $result = mysqli_connect($conn, $query);
  while ($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
  };
  print(json_encode($output));
};



?>
