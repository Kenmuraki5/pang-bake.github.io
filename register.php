<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
</body>
<?php
    session_start();

    class MyDB extends SQLite3 {
        function __construct() {
           $this->open('user.db');
        }
     }
     $db = new MyDB();
     
    if(isset($_POST['SUBMIT']))
    {
    $Name = htmlentities($_POST['Name']) ;
    $Surname = htmlentities($_POST['Surname']);
    $Username = htmlentities($_POST['Username']);
    $Password = htmlentities($_POST['Password']);
    $Password_2 = htmlentities($_POST['Password_2']);
    $Address = htmlentities($_POST['Address']);
    if($Password != $Password_2){
        echo '<script type="text/javascript">';
        echo 'alert("Password dose not match!")';  
        echo '</script>';
    }else{
        $sql =<<<EOF
                    INSERT INTO COMPANY(NAME,SURNAME,USERNAME,PASSWORD,ADDRESS)
                    VALUES ('$Name', '$Surname','$Username', '$Password' ,'$Address');
                EOF;
                header('location: login.php');
                $ret = $db->exec($sql);
    }
        
    }
  
     // Close database
     $db->close();
     

?>
</html>