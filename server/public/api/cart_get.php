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
  print(getBodyData([]));
  throw new exception("must have a valid product id to add to cart");
  exit();
} else {
  $cartId = intval($_SESSION['cartId']);
}

  $query = "SELECT cartItems.count, products.id, products.name, products.price, products.shortDescription, images.url FROM `cartItems` JOIN `products` ON cartItems.productID = products.id JOIN `images` ON `products`.id = images.productId WHERE cartItems.id IN (1) LIMIT 1";
  // $cartID = $_SESSION['cartId'];

  // $result = mysqli_connect($conn, $query);
  // while ($row = mysqli_fetch_assoc($result)){
  //   $output[] = $row;
  // };
  // print(json_encode($output));

  $result = mysqli_query($conn, $query);
  $data = [];
  while($row = mysqli_fetch_assoc($result)) {  // mysqli_fetch_assoc iterates through array until data runs out
    $data[] = $row;                             // then while tests a falsey value which stops the loop
  }
  if($data === []) { // if query id does not exist, result will not return anything. So this tests if the id is invalid
    print("[]");
    exit();
} else {
    print(json_encode($data));
}




?>
