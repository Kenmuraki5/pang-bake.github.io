<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <form method="POST" action="login.php">
            <h2>Login</h2>
            <label>Username</label>
            <input type="text" name="Username" require><br><br>
            <label>Password</label>
            <input type="password" name="Password" require><br><br>
            <input type="submit" name="SUBMIT" value="Login" class="btn btn-dark"><br>
            <p>Not a member? <a href="register.html">Sign Up</a> here.</p>
        </form>
    </div>
    <?php
    session_start();
    class MyDB extends SQLite3
    {
        function __construct()
        {
            $this->open('user.db');
        }
    }
    $db = new MyDB();

    if (isset($_POST['SUBMIT'])) {
        $Username = htmlentities($_POST['Username']);
        $Password = htmlentities($_POST['Password']);
        $sql = "SELECT * from COMPANY WHERE USERNAME = '$Username' AND PASSWORD = '$Password'";
        $ret = $db->query($sql);

        while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
            echo '<script type="text/javascript">';
            echo    "localStorage.setItem('Username', '" . $Username . "')";
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