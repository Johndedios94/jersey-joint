<?php

require_once('functions.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$query = "";
if(empty($_GET['id'])){
  $query = "SELECT products.id, products.name, products.price, products.shortDescription, GROUP_CONCAT(images.image) AS image
FROM products JOIN images ON products.id =
images.productId
GROUP BY images.productid";
} else if(is_numeric($_GET['id'])){
  $id = ($_GET['id']);
  $query = "SELECT products.id, products.name, products.price, products.shortDescription, products.longDescription, GROUP_CONCAT(images.image) AS image
  FROM products JOIN images ON products.id =
  images.productId
  WHERE products.id = $id
  GROUP BY images.productid";
} else {
  throw new Exception("id needs to be a number");
};

// var_dump("id is " , $_GET['products.id']);

// $query = "SELECT products.id, products.name, products.price, products.shortDescription, GROUP_CONCAT(images.image) AS image
// FROM products JOIN images ON products.id =
// images.productId
// GROUP BY images.productid";

$result = $conn->query($query);
// var_dump("result is ", $result);
if(!$result){
  throw new Exception(mysqli_connect_error($conn));
};

  $output = array();
  while($row = mysqli_fetch_assoc($result)){
  // $row['imageurl'] = explode(',', $row['imageurl']);
  $output[] = $row;
}
 print(json_encode($output))


?>
