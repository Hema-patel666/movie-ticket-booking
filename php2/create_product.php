<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || (float)$request['price'] < 0)
	{
		return http_response_code(400);
	}
	$name = mysqli_real_escape_string($db, trim($request['name']));
	$price = mysqli_real_escape_string($db, (int)$request['price']);
	$sql = "INSERT INTO movie (id,name,price) VALUES (null,'$name',$price)";
	if($db->query($sql))
	{
		http_response_code(201);
		$product = [
		'id' => mysqli_insert_id($db),'name' => $name,
		'price' => $price];
		echo json_encode($product);
	}
	else
	{
		http_response_code(422);
	}
}
?>