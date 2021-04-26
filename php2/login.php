<?php
session_start();
include_once("database.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$pwd = mysqli_real_escape_string($db, trim($request->password));
$email = mysqli_real_escape_string($db, trim($request->username));
//$sql = "SELECT * FROM users where email='$email' and password='$pwd'";
$sql = "SELECT * FROM admin where aname='$email' and apass='$pwd'";
if($result = mysqli_query($db,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
//echo "varsha";
?>