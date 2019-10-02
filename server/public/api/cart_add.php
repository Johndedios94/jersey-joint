<?php
require_once('functions.php');
require_once('cart.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$json = file_get_contents('php://input');
$id = json_decode($json, true);
var_dump("the posted data is", $json);

intval($id);
$id = $id['id'];


if($id === 0){
  throw new Exception("no id");
};


// $cartID = null;
// if(empty($_SESSION['cartID'])){
//   $cartID = $_SESSION['cartID'];
// } else{
//   $cartID = false;
// };

// var_dump("id is ", $id);

// if(INTERNAL){
//   exit();
// };

$query = "SELECT `price` FROM `products` WHERE id = " ;
$result = mysqli_query($conn, $query);
var_dump('result is ', $result);
var_dump('query is', $query);
// print("hi");

if (!$result) {
  throw new Exception("product needs a valid id");
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

if(mysqli_num_rows($result) <= 0){
  throw new exception("No data, invalid product id");
};
$productData = [];

while($row = mysqli_fetch_assoc($result)){
  $productData[] = $row ;
};

$transactionQuery = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $transactionQuery);
if (!$transactionResult) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

if($cartID === false){
  $insertQuery = "INSERT INTO `cartItems`(`count`, `productID`, `price`, `added`, `cartID`)
VALUES (2, 1, 25, NOW(), 1 )
ON DUPLICATE KEY UPDATE";
  $insertQueryResult = mysqli_query($conn, $insertQueryResult);
  if(mysqli_affected_rows($insertQueryResult) === 0){
    $rollback = "ROLLBACK";
    mysqli_query($conn, $rollback);
    throw new Exception("Failed to add");
  } else if (mysqli_affected_Rows($inserQueryResult) >= 1){
    $commit = "COMMIT";
    mysqli_query($conn, $commit);

  };
  $cartId = mysqli_insert_id($conn);
  $_SESSION('cartId');
}
?>
