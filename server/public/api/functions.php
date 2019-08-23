
<?php
 function error_handling($error){
  $output = ["success" =>false,
            "error:" => $error -> getMessage()];
  $json_output= json_encode($output);
  print($json_output);

  function startup(){
    return header('Content-Type: application/json');
  }
 }
 ?>
