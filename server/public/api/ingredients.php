<?php
header('Content-Type: application/json');

if (empty($_GET['id'])) {
  readfile('dummy-ingredients.json');
} else {
  readfile('dummy-ingredients.json');
}
