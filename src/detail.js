let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let dat = JSON.parse(window.localStorage.getItem('user')) || [];
let num = 0;
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
if (localStorage.getItem('user')== null){
  window.location.replace('index.html');
}

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
let generatedetail = () => {
        let { id, item } = x => x.id == dat.id;
  ShoppingCart.innerHTML = `
  <div class="container">
    <div class="row">
        <div class="col-md-6">
            <img src="${dat.src}" width="100%">
        </div>
        <div class="col-md-6 mt-3">
            <div class="name"><h1>${dat.name}</h1></div>
            <div class="detail col-md-12 mt-4">
                <p>${dat.desc}</p>
            </div>
            <div class="d-flex justify-content-between">
              <h5 style="color:red;">คำสั่งพิเศษ</h5>
              <h4>${dat.price} ฿</h4>
            </div>
            <form">
                <textarea type="text" name="specialde"rows="7" style="width:100%;" value="dfdfdf"></textarea>
              <div class="buttons mt-5">
                  <div>
                    <div id=${dat.id} class="quantity" style="align-items:center; display:none;"></div>
                  </div>
                  <input class="btn btn-lg col-md-12" style="background-color:#5c4b44; color:white;"onclick="increment(${id})" value="add to cart"/>
              </div>
            </form>
        </div>
    </div>
  </div>
      `;
}

generatedetail();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generatedetail();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

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
        let search = Bestseller.find((y) => y.id === id) || neww.find((x) => x.id === id) || Cake.find((x) => x.id === id) ||
          icecreamecake.find((x) => x.id === id) || cookies.find((x) => x.id === id) || Milk.find((x) => x.id === id) ||
          Juice.find((x) => x.id === id) || Tea.find((x) => x.id === id) || Coffee.find((x) => x.id === id) ||
          snack.find((x) => x.id === id) || Bread.find((x) => x.id === id) || Croissant.find((x) => x.id === id) || 
          Eclair.find((x) => x.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);

  } else return;
};

TotalAmount();
