<?php

include 'database.php';

if($_FILES["stphoto"])  
 {  
   $tmporary = $_FILES["stphoto"]["tmp_name"];
   $file_name = $_FILES["stphoto"]["name"];
      if(move_uploaded_file($tmporary,"D:\lolo\upload/"."$file_name"))

    {

      
       if($file = addslashes(file_get_contents("D:\lolo\upload/"."$file_name")))
       {
            $sql = "INSERT INTO imagedb (`imagefile`) VALUES ('$file')";
            mysqli_query($db,$sql);
            mysqli_query($db,"ALTER TABLE imagedb AUTO_INCREMENT = 1");
            echo json_encode("successfully injected");
       }
    }

       else
        echo json_encode("error");
 }

?>