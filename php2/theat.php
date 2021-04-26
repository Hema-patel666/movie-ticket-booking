<?php
include 'database.php';
$theats = [];

$sql = "SELECT * FROM theat";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$theats[$i]['id'] = $row['id'];
		$theats[$i]['name'] = $row['name'];
		$theats[$i]['address'] = $row['address'];
		$theats[$i]['comment'] = $row['comment'];
		$theats[$i]['date'] = $row['date'];
		$i++;
	}
	echo json_encode($theats);
}
else
{
	http_response_code(404);
}
?>