let product = document.getElementById("product");
let summary = document.getElementById("summary");
let t_amount = document.getElementById("totalprice");
let num = 0;

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
function show(){
  if (num == 0){
    document.getElementById("log-out").style.display = "flex";
    num++;
  }
  else{
    document.getElementById("log-out").style.display = "none";
    num=0;
  }
  
};
function logout(){
  localStorage.clear();
  document.location.reload();
}
let login = document.getElementById("login");
if (localStorage.getItem("Username") != null){
  login.removeAttribute("href");
  login.innerHTML = `<div class='fa fa-user-circle' style='padding-right:10px; padding-top:7px; font-size:20px; cursor: pointer;' onclick="show()"></div>`;
  document.getElementById("log-out").innerHTML = "<div style='text-align:center;'>Username : "+localStorage.getItem("Username")+"</div>\
  <footer class='d-flex justify-content-center' style='background-color:white; position:absolute; bottom:0; width:100%; border-radius: 6px;'>\
      <button type='button' class='btn btn-outline-dark col-md-12' onclick='logout()'>Logout</button>\
  </footer>";
}
if (localStorage.getItem('Username')== null){
  window.location.replace('login.php');
}
calculation();
let generateproductall = () => {
  if (basket.length !== 0) {
    return (product.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = Bestseller.find((y) => y.id === id) || neww.find((x) => x.id === id) || ButterCake.find((x) => x.id === id)||
        icecreamecake.find((x) => x.id === id) || cookies.find((x) => x.id === id) || Milk.find((x) => x.id === id) || 
        Juice.find((x) => x.id === id) || Tea.find((x) => x.id === id) || Coffee.find((x) => x.id === id) ||
        snack.find((x) => x.id === id) || Bread.find((x) => x.id === id) || Croissant.find((x) => x.id === id) || 
        Baguette.find((x) => x.id === id) || [];
        return `
        <div class="col-md-12 col-xl-12 mt-3">
            <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                <img src="${search.img}"
                                    class="w-100" />
                                <a href="#!">
                                    <div class="hover-overlay">
                                        <div class="mask"
                                            style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-6">
                            <h5>${search.name}</h5>
                            <h3 class="">
                                amount: ${item}
                            </h3>
                            <h5 style="position:absolute; bottom:0;">total price:
                              <span style="color:red;">${item * search.price} ฿<span>
                            </h5>
                        </div>
                        <div class="col-md-12 col-lg-3 col-xl-3 border-sm-start-none border-start" >
                            <div class="d-flex justify-content-between mt-4">
                                <h6 class="text-success">price</h6>
                                <div class="div">
                                    <h4 style="text-align: right;">${search.price} ฿</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
      })
      .join(""));
  }
};
generateproductall();

let generatesummary = () => {
  if (basket.length !== 0) {
    return (summary.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = Bestseller.find((y) => y.id === id) || neww.find((x) => x.id === id) || ButterCake.find((x) => x.id === id)||
        icecreamecake.find((x) => x.id === id) || cookies.find((x) => x.id === id) || Milk.find((x) => x.id === id) || 
        Juice.find((x) => x.id === id) || Tea.find((x) => x.id === id) || Coffee.find((x) => x.id === id) ||
        snack.find((x) => x.id === id) || Bread.find((x) => x.id === id) || Croissant.find((x) => x.id === id) || 
        Baguette.find((x) => x.id === id) || [];
        return `
        <p class="d-flex justify-content-between">${search.name}<span>${search.price}฿</span></p>
        <p style="text-align: right; margin-top: -10px; color: rgb(156, 164, 169);">x${item}</p>
      `;
      })
      .join(""));
  }
};
generatesummary();

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = Bestseller.find((y) => y.id === id) || neww.find((x) => x.id === id) || ButterCake.find((x) => x.id === id) || 
        icecreamecake.find((x) => x.id === id) || cookies.find((x) => x.id === id) || Milk.find((x) => x.id === id) || 
        Juice.find((x) => x.id === id) || Tea.find((x) => x.id === id) || Coffee.find((x) => x.id === id) ||
        snack.find((x) => x.id === id) || Bread.find((x) => x.id === id) || Croissant.find((x) => x.id === id) || 
        Baguette.find((x) => x.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    t_amount.innerHTML = `
    <h4 class="p-3 d-flex justify-content-between" >Total:<span style="color: red;" id = "total">${amount}฿</span></h4>
    `;
  } else return;
};

TotalAmount();

