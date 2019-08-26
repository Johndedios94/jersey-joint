<?php
require_once('functions.php');
set_exception_handler('error_handling');

require_once('db_connection.php');
startup();

$query = "SELECT * FROM `products`";
  $result = $conn->query($query);
if(!$result){
  throw new Exception(mysqli_connect_error($conn));
}
  $output = array();
  while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}
 print(json_encode($output))

?>
