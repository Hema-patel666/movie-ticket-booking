<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || trim($request['address']) === ''|| trim($request['comment']) === ''|| trim($request['date']) < 0)
	{
		return http_response_code(400);
	}
	
	$name = mysqli_real_escape_string($db, trim($request['name']));
	$address = mysqli_real_escape_string($db, trim($request['address']));
	$comment = mysqli_real_escape_string($db, trim($request['comment']));
	$date = mysqli_real_escape_string($db, trim($request['date']));
	
	$sql = "INSERT INTO theat (id,name,address,comment,date) VALUES (null,'$name','$address','$comment','$date')";
	if($db->query($sql))
	{
		http_response_code(201);
		$product = [
		'id' => mysqli_insert_id($db),
		'name' => $name,
		'address' => $address,
		'comment' => $comment,
		'date' => $date
		];
		
		echo json_encode($product);
	}
	else
	{
		http_response_code(422);
	}
}
?>