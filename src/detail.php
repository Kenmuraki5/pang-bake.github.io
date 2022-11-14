<?php
    $id = htmlentities($_POST['specialde']) ;
    echo '<script type="text/javascript">';
        echo    "localStorage.setItem('specdetail', '".$id."')";
    echo '</script>';
?>