<?php
require_once('functions.php');
set_exception_handler('error_handling');
startup();
require_once('db_connection.php');


if(empty($_GET['id'])){
   $whereClause = " ";
}
if(!empty($_GET['id'])){
   $whereClause = "WHERE `id` = " . $_GET['id'];
};
if(!empty($_GET['id']) && !is_numeric($_GET['id']) ) {
     throw new Exception('id needs to be a number');
}


$query = "SELECT * FROM `products`" . $whereClause;
$result = $conn->query($query);
if(mysqli_num_rows($result) === 0 && !empty($_GET['id'])){
  throw new Exception("Invalid ID: " . $_GET['id']);
}
if(!$result){
  throw new Exception(mysqli_connect_error($conn));
};
  $output = array();
  while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}
 print(json_encode($output))

?>
