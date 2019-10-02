
<?php
 function startup(){
    return header('Content-Type: application/json');
  }
 function error_handling($error){
  $output = ["success" =>false, "error" => $error -> getMessage()];
  http_response_code(500);
  $json_output= json_encode($output);
  print($json_output);

  function getBodyData()
  {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    return $data;
  }

 }
 ?>
