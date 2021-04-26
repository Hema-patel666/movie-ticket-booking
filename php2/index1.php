<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM movie";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['id'] = $row['id'];
		$products[$i]['name'] = $row['name'];
		$products[$i]['price'] = $row['price'];
		$i++;
	}
	echo json_encode($products);
}
else
{
	http_response_code(404);
}
?>