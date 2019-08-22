<?php

function error_handling($error){
  $output = ["success" =>false,
            "error:" => $error -> getMessage()];
  http_response_code(500);
  $json_output= json_encode($output);
  print($json_output);

}


?>
