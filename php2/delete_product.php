<?php
require 'database.php';
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($db, (int)$_GET['id']) : false;
if(!$id)
{
	return http_response_code(400);
}

$sql = "DELETE FROM movie WHERE id =$id";
if($db->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
?>