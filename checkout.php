<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style-checkout.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
    </script>
    <title>T-Pang-bake</title>
</head>
<?php
session_start();
if (empty($_SESSION["Username"])) {
    header("Location: login.php");
}
?>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark " style="position: fixed; z-index: 1000; top:0; width: 100%; background-color: black;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <a class="navbar-brand" style="color:white;" href="index.html"><b>T-pang-bake</b></a>
            </div>
            <div class="collapse navbar-collapse mr-5" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link navbakery" style="color:white;" aria-current="page" href="bakery.html">Bakery</a>
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
                        <a class="nav-link navsnack" style="color:white;" href="snack.html">Snack&Food</a>
                    </li>
                </ul>
            </div>
            <div>
                <a id="login" style="color:white;" href="login.php"><b>Login</b></a>
                <a href="cart.html" style="font-size:20px; text-decoration:none; color:white;" class="fa fa-shopping-cart"></a>
                <div id="cartAmount" class="cartAmount">0</div>
            </div>
        </div>
        </div>
    </nav>
    <div id="log-out">log out</div>
    <div class="container px-6" style="margin-top: 100px;">
        <div class="row">
            <div class="col-md-8">
                <div class="">
                    <h1>Product list</h1>
                </div>
                <!-- ????????????????????? product-->
                <div class="row justify-content-center mb-3 mt-3" id="product">

                </div>
            </div>
            <div class="col-md-4 p-3">
                <div class="customers p-3b border rounded-3 p-3" style="background-color: rgb(251, 251, 251);">
                    <h3 style="text-align:center;">Delivery</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" <?php echo 'onclick="showaddress()"'; ?> checked>
                        <label class="form-check-label" for="exampleRadios1">
                            Address as previously applied
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" <?php echo 'onclick="showaddress()"'; ?>>
                        <label class="form-check-label" for="exampleRadios2">
                            New address
                        </label>
                    </div>
                    <h5>Address</h5>
                    <form method="POST">
                        <div class="p-3 d-flex justify-content-center flex-column" id="delivery-address"></div>
                        <div class="form-group row mt-3">
                            <label for="Phone" class="col-sm-2 col-form-label">Phone:</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" name="phone" placeholder="Phone number" required>
                            </div>
                        </div>
                        <hr>
                        <div id="d" style="display: none;">

                        </div>
                        <h3 style="text-align:center;">Summary</h3>
                        <!-- ????????????????????? summart -->
                        <div class="p-3 justify-content-between" id="summary"></div>
                        <hr>
                        <!-- ????????????????????? ????????????????????? -->
                        <div id="totalprice"></div>
                        <div id="b" style="display: none;">

                        </div>
                        <hr>
                        <h6 style="text-align: center; color: rgb(229, 48, 78);">Now the system only has cash on delivery.</h6>
                        <hr>
                        <input type="submit" name="SUBMIT" value="Payment" class="btn btn-warning" style="width:100%;"><br>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer class="site-footer mt-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-6">
                    <h6>About</h6>
                    <p class="mt-4">64070104 ????????? ????????????????????? ????????????????????????</p>
                    <p>64070127 ????????? ????????? ??????????????????</p>
                    <p>64070136 ????????? ??????????????? ???????????????????????????</p>
                    <p>64070156 ????????? ???????????? ????????????????????????????????????</p>
                    <p>64070253 ????????? ????????????????????? ???????????????????????????</p>
                    <h6 style="color: white;">Faculty of Information Technology
                        King Mongkut's Institute of Technology Ladkrabang</h6>
                    <p class="text-justify"></p>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul class="footer-links">
                        <li><a href="bakery.html">Bakery</a></li>
                        <li><a href="secake.html">cake</a></li>
                        <li><a href="cookies.html">Cookie</a></li>
                        <li><a href="drink.html">Drink</a></li>
                        <li><a href="snack.html">Snack</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
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
                        <li><a class="instragram" href="#"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</body>
<script src="src/Data.js"></script>
<script src="src/checkout.js"></script>
<?php
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('user.db');
    }
}

// Open Database 
$db = new MyDB();

$Username = $_SESSION["Username"];
$sql = "SELECT * from COMPANY WHERE USERNAME = '$Username'";
$ret = $db->query($sql);
while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
    $Address = $row['ADDRESS'];
}

if (isset($_POST['SUBMIT'])) {
    $prod = ($_POST['order']);
    $total = ($_POST['amount']);
    $phone = ($_POST['phone']);
    $Address_2 = htmlentities($_POST['Address']);
    $Username_2 = $_SESSION["Username"];
    $sql =  <<<EOF
                    INSERT INTO USER (USERNAME,PRODUCT,ADDRESS,TOTAL,PHONE)
                    VALUES ('$Username_2','$prod','$Address_2','$total', '$phone');
                 EOF;
    $ret = $db->exec($sql);
    echo '<script type="text/javascript">';
    echo 'localStorage.removeItem("data");';
    echo 'alert("We got your order.")';
    echo '</script>';
    echo '<script type="text/javascript">';
    echo    'window.location="index.html"';
    echo '</script>';
}


// Close database
$db->close();
?>



<script>
    var radios = document.getElementsByName('exampleRadios');
    if (radios[0].checked) {
        document.getElementById("delivery-address").innerHTML = '<textarea rows="5" cols="30" name="Address" readonly><?php echo "$Address"; ?></textarea>'
    }
    if (radios[1].checked) {
        document.getElementById("delivery-address").innerHTML = '<textarea rows="5" cols="30" name="Address" required ></textarea>'
    }

    function showaddress() {
        if (radios[0].checked) {
            document.getElementById("delivery-address").innerHTML = '<textarea rows="5" cols="30" name="Address" readonly><?php echo "$Address"; ?></textarea>'
        }
        if (radios[1].checked) {
            document.getElementById("delivery-address").innerHTML = '<textarea rows="5" cols="30" name="Address" required></textarea>'
        }
    }

    function create_data() {
        let data_1 = document.getElementById('d')
        let prod = localStorage.getItem('data')
        let total = document.getElementById('total').getInnerHTML()
        data_1.innerHTML = `<textarea rows="5" cols="30" name="order" readonly>${prod}</textarea>`
        document.getElementById('b').innerHTML = `<textarea rows="5" cols="30" name="amount" readonly>${total}</textarea>`
    }
    create_data();
</script>

</html>