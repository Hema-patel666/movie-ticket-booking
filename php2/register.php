<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

$name = trim($request->name);
$pwd = mysqli_real_escape_string($db, trim($request->pwd));
$email = mysqli_real_escape_string($db, trim($request->email));

$sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";

if ($db->query($sql) === TRUE)
{
$authdata = ['name' => $name,'pwd' => '','email' => $email,'Id' => mysqli_insert_id($db)];

echo json_encode($authdata);
}
}

?>