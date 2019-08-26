
<?php
  function startup(){
    return header('Content-Type: application/json');
  }
 function error_handling($error){
  $output = ["success" =>false,
            "error:" => $error -> getMessage()];
  $json_output= json_encode($output);
  print($json_output);
 }
 ?>
