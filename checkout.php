<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="checkout.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
</head>
    <style>
        * {
            margin: 0;
            padding: 0;

        }
        body{
           
            margin-top: 100px;
        }
    </style>
<body>
    <?php
    session_start();
    ?>
<nav class="navbar navbar-expand-lg navbar-dark "
            style="position: fixed; z-index: 1000; top:0; left:0; width: 100%; background-color: black;">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <a class="navbar-brand" style="color:white;" href="index.html"><b>T-pang-bake</b></a>
                </div>
                <div class="collapse navbar-collapse mr-5" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link navbakery" style="color:white;" aria-current="page" href="#">Bakery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navcake" style="color:white;" href="secake.html">Cake</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navcookie" style="color:white;" href="cookies.html">Cookies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navdrink" style="color:white;" href="drink.html">Drinks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navsnack" style="color:white;" href="snack.html">Snack</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
        <!-- <div class="container " >
                <div class="row gx-5" style="margin-top: 200px;">
                    <div class="col-md-8 " style="height: 500px; background-color:red;">
                        
                    </div>
                    <div class="col-md-4"style="height: 300px; background-color:black; ">

                    </div>
                </div>
        </div> -->
        <!-- <div class="container px-6">
  <div class="row gx-3">
    <div class="col-md " style="background-color: red;">
     
    <h1>รายการสินค้า</h1>
    </div>
    <div class="col-md " style="background-color: grey;">
      <h1 style="text-align:center;">ข้อมูลลูกค้า</h1>
        <hr>
        <hr>
        <hr>
        <hr>
        <input type="submit" name="SUBMIT" value="Login" class="btn btn-warning" style="width:100%;"><br>
    </div>
  </div>
</div> -->
<div class="container px-6">
  <div class="row gx-5">
    <div class="col-md-8" style="background-color: grey;">
        <div class="p-3 border bg-light"><h1 style="text-align:center;">Product list</h1></div>
   
    </div>
    <div class="col-md-4 p-3" style="">
         <div class="customers p-3" style="background-color: red;"><h1 style="text-align:center;">Profile</h1>
        <hr>
        <hr>
        <hr>
        <hr>
        <input type="submit" name="SUBMIT" value="Login" class="btn btn-warning" style="width:100%;"><br>
        </div>
    </div>
  </div>
</div>
<footer class="site-footer mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-6">
            <h6>About</h6>
            <p class="text-justify"></p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Bakery</a></li>
              <li><a href="secake.html">cake</a></li>
              <li><a href="cookies.html">Cookie</a></li>
              <li><a href="drink.html">Drink</a></li>
              <li><a href="snack.html">Snack</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">made by T-pang bakery
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        
        <?php
        class MyDB extends SQLite3 {
            function __construct() {
            $this->open('user.db');
            }
        }
        
        $db = new MyDB();

            
            $Username = $_SESSION["Username"];
            $sql = "SELECT * from COMPANY WHERE USERNAME = '$Username'";
            $ret = $db->query($sql);
                while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
                    // echo "<div style='margin:100px;'>";
                    // echo $row['NAME'];
                    // echo $row['SURNAME'];
                    // echo $row['ADDRESS'];
                    // echo "</div>";

                    }
        
                    

        $db->close();

    ?>

        
        
        

</body>
</html>