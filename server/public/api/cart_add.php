<?php
require_once('functions.php');

if(!INTERNAL){
  print("Direct access not allowed");
  exit();
};
// require_once('cart.php');
// set_exception_handler('error_handling');

// require_once('db_connection.php');
// startup();

// $item = file_get_contents('php://input');
// $id = getBodyData($item);
// $id = json_decode($item, true);

$bodyData = getBodyData();
$id = $bodyData["id"];
// $idint = (int)$id;
// var_dump("the count is", $bodyData["count"]);



if($id <= 0){
  throw new Exception("id iz invalid");
};
// intval($id);
// $id = $id['id'];


// if($id === 0){
//   throw new Exception("no id");
// };

// var_dump("session id is ", $_SESSION['cartId']);
// $cartID = $_SESSION['cartID'];

if(array_key_exists('cartId', $_SESSION)){
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
};


var_dump("cart id is", $cartID);
// var_dump("id is ", $id);


$query = "SELECT `price` FROM `products` WHERE id = $id" ;
$result = mysqli_query($conn, $query);
// var_dump('result is ', $result);
// var_dump('query is', $query);
// print("hi");

if (!$result) {
  throw new Exception('Connect Failed');
}

// else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
//   throw new Exception('Invalid ID: ' . $_GET['id']);
// }

if(mysqli_num_rows($result) <= 0){
  throw new Exception("No data, invalid product id " . $id);
};
$productData = [];
while($row = mysqli_fetch_assoc($result)){
  $productData[] = $row ;
};
$price = $productData[0]["price"];

var_dump("product data is ", $price);


$transactionQuery = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $transactionQuery);

if (!$transactionResult) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
};

// var_dump("Cart id here is ", $cartID);
// var_dump("cart id is ", $cartID);

if(!$cartID){
  $insertQuery = "INSERT INTO `cart` SET `created` = NOW()";
  $insertQueryResult = mysqli_query($conn, $insertQuery);
  var_dump("hi result is ", $insertQueryResult);
  if(mysqli_affected_rows($conn) === 0){
    throw new Exception("no rows affected");
  };
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID;
  var_dump("this is the insert id ", $insertId);
}
$insertTableQuery = "INSERT INTO `cartItems`(`count`, `productID`, `price`, `added`, `cartID`)
VALUES (1, $id, $price, NOW(), $cartID ) ON DUPLICATE KEY UPDATE `count`=`count`+ 1";
var_dump("Insert table query is ", $insertTableQuery);

$inserResult = mysqli_query($conn, $insertTableQuery);

if(mysqli_affected_rows($conn) === 0){
    $rollback = "ROLLBACK";
    mysqli_query($conn, $rollback);
    throw new Exception("Failed to add");
  } else if (mysqli_affected_Rows($conn) >= 1){
    $commit = "COMMIT";
    mysqli_query($conn, $commit);

  };




?>
