<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	
	if(trim($request['name']) === '' || trim($request['address']) === ''|| trim($request['comment'])=== '' ||trim($request['date']) < 0)
	{
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($db, (int)$request['id']);
	$name = mysqli_real_escape_string($db, trim($request['name']));
	$address = mysqli_real_escape_string($db, trim($request['address']));
	$comment = mysqli_real_escape_string($db, trim($request['comment']));
		$date = mysqli_real_escape_string($db, trim($request['date']));
	$sql = "UPDATE theat SET name='$name',address='$address',comment='$comment',date='$date' WHERE id = $id";
	
	if($db->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
?>