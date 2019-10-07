<?php
require_once('functions.php');

if(!INTERNAL){
  print("Direct access not allowed");
  exit();
};

$bodyData = getBodyData();
var_dump("body data is ", $bodyData);
$id = $bodyData[0]["id"];


if($id <= 0){
  throw new Exception("id iz invalid");
};

if(array_key_exists('cartId', $_SESSION)){
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
};

$query = "SELECT `price` FROM `products` WHERE id = $id" ;
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('Connect Failed');
}

if(mysqli_num_rows($result) <= 0){
  throw new Exception("No data, invalid product id " . $id);
};
$productData = [];
while($row = mysqli_fetch_assoc($result)){
  $productData[] = $row ;
};
$price = $productData[0]["price"];


$transactionQuery = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $transactionQuery);

if (!$transactionResult) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
};

if(!$cartID){
  $insertQuery = "INSERT INTO `cart` SET `created` = NOW()";
  $insertQueryResult = mysqli_query($conn, $insertQuery);
  if(mysqli_affected_rows($conn) === 0){
    throw new Exception("no rows affected");
  };
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID;
}
$insertTableQuery = "INSERT INTO `cartItems`(`count`, `productID`, `price`, `added`, `cartID`)
VALUES (1, $id, $price, NOW(), $cartID ) ON DUPLICATE KEY UPDATE `count`=`count`+ 1";


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
