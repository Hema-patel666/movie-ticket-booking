<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$db_server = '127.0.0.1:3308';
$db_username = 'root';
$db_password = '';
$db_name = 'angdb';
$db = new mysqli($db_server, $db_username, $db_password,$db_name);

if ($db->connect_error) {
die('Error : ('. $db->connect_errno .') '. $db->connect_error);

}


?>