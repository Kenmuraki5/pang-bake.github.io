
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
<style>
     *{
        margin: 0;
        padding: 0;
        
    }
    html{
        display:flex;
        height:100%;
        width: 100%;
        justify-content:center;
        align-items:center;
        
    }
    body{
        /* background: linear-gradient(#ffad00,#e6a319,#cca34d); */
        background-size: cover;
        background-image: url(https://raw.githubusercontent.com/Kenmuraki5/pang-bake.github.io/main/images/image2.jpeg);
    }
    .container {
        background: #fff;
        border-radius: 5px;
        padding: 50px 50px;
    }
    input{
        width: 100%;
    }
    input::placeholder {
    font-weight: bold;
    text-align: center;

}
.inputBox{
        position: relative;
        width: 250px;
    }
    .inputBox input, textarea{
        width: 100%;
        padding: 5px;
        outline: none;
        font-size: 1em;
    }
    .inputBox span{
        color: #b3b3b3;
        position: absolute;
        left: 0;
        padding: 2px 10px;
        pointer-events: none;
        font-size: 1.2em;
        transition: 0.5s;
        font-weight: bold;
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span
    {
        color: black;
        transform: translateX(10px) translateY(-15px);
        font-size: 1em;
        padding: 0 5px;
        background: #fff;
    }
</style>
<body>
    <div class="container">
        <form method="POST">
            <h2 class="mb-4" style="font-weight: bold; text-align: center;">Login</h2>
            <div class="inputBox">
                <input type="text" name="Username" required >
                <span>Username</span>
            </div>
            <div class="inputBox mt-3">
                <input type="password" name="Password" required >
                <span>Password</span>
            </div>
            <div class="inputBox mt-4">
                <input type="submit" name="SUBMIT" value="Login" class="btn btn-warning" style="width:100%;"><br>
            </div>
            <p class="link mt-2" style="text-align: center;">Not a member? <a href="register.php">Sign Up</a> here.</p>
        </form>
    </div>
    
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
        $Username = htmlentities($_POST['Username']);
        $Password = htmlentities($_POST['Password']);
        $sql = "SELECT * from COMPANY WHERE USERNAME = '$Username' AND PASSWORD = '$Password'";
        $ret = $db->query($sql);
        
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
        echo '<script type="text/javascript">';
        echo    "localStorage.setItem('Username', '".$Username."')";
        echo '</script>';
        echo '<script type="text/javascript">';
        echo    'window.location="index.html"';
        echo '</script>';
         }
         echo '<script type="text/javascript">';
        echo 'alert("wrong Username or Password.")';  
        echo '</script>';
    }   
                

     $db->close();

    ?>
</body>

</html>