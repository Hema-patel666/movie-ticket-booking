<?php
include 'database.php';
$policies = [];
$sql = "SELECT imagefile FROM imagedb";
if($result = mysqli_query($db,$sql))
{
	$i = 0;
while($row = mysqli_fetch_assoc($result))
{

	 
    $policies[$i]['imagefile'] = $row['imagefile'];
       $i++;
echo $row['imagefile'];	
}
	 echo json_encode($policies);
}
else
{
  http_response_code(404);
}
?>