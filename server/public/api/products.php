<?php
require_once('functions.php');
set_exception_handler('error_handling');
// startup();
require_once('db_connection.php');


if(empty($_GET['id'])){
   $whereClause = " ";
  //  $whereClause = "WHERE `id` < 5";
} else if (!is_numeric($_GET['id'])) {
     throw new Exception('id not valid');
} else{
   $whereClause = "WHERE `id` = " . $_GET['id'];
};
  //  $whereClause = "WHERE `id` < 5";


$query = "SELECT * FROM `products`" . $whereClause;

 $result = $conn->query($query);
 $output=[];
if($result = mysqli_query($conn, $query)){
  $rows = mysqli_num_rows($result);
  if($rows === 0 ){
    print('no data available');
    exit();
  }
  while($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
  }
 } else {
  throw new Exception("Error message: %s\n", mysqli_error($conn));
}
 print(json_encode($output))


?>
