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
        echo    'window.location="login.php"';
        echo '</script>';
    }
    $db->close();
?>
