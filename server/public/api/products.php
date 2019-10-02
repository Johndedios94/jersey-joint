<?php
require_once('functions.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$whereClause = "";
if(empty($_GET['id'])){
  $whereClause = " ";
} else if(is_numeric($_GET['id'])){
  $whereClause = "WHERE `id` =" . $_GET['id'];
} else{
  throw new Exception("id needs to be a number");
};

// var_dump("id is " , $_GET['products.id']);

$query = "SELECT products.id, products.name, products.price, products.shortDescription, GROUP_CONCAT(images.url) AS imageurl
FROM products JOIN images ON products.id =
images.productId
GROUP BY images.productid";

$result = $conn->query($query);
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
