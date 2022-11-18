let drink1 = document.getElementById("Milk");
let drink2 = document.getElementById("Juice");
let drink3 = document.getElementById("Tea");
let drink4 = document.getElementById("Coffee");
let basket = JSON.parse(localStorage.getItem("data")) || [];
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

let savedata = (obj) => {
  const person = {
    id: obj.getAttribute("id"),
    name: obj.getAttribute("alt"),
    src: obj.getAttribute("src"),
    desc:obj.getAttribute("value"),
    price:obj.getAttribute("name"),
  }
  window.localStorage.setItem('user',   JSON.stringify(person));
};

let generatemilk = () => {
  return (drink1.innerHTML = Milk
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <a href="detail.html"><img width="100%" alt="${name} "src=${img} id="${id}" name="${price}" value="${desc}"onclick="savedata(this)"></a>
        <div class="details">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>${price} ฿</h2>
            <div class="buttons">
              <div id=${id} class="quantity" style="display:none;">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i class="btn" style="background-color:#5c4b44; color:white;"onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};



let generatejuice = () => {
  return (drink2.innerHTML = Juice
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <a href="detail.html"><img width="100%" alt="${name} "src=${img} id="${id}" name="${price}" value="${desc}"onclick="savedata(this)"></a>
        <div class="details">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>${price} ฿</h2>
            <div class="buttons">
              <div id=${id} class="quantity" style="display:none;">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i class="btn" style="background-color:#5c4b44; color:white;"onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

  let generatetea = () => {
    return (drink3.innerHTML = Tea
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
          <a href="detail.html"><img width="100%" alt="${name} "src=${img} id="${id}" name="${price}" value="${desc}"onclick="savedata(this)"></a>
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
              <h2>${price} ฿</h2>
              <div class="buttons">
                <div id=${id} class="quantity" style="display:none;">
                ${search.item === undefined ? 0 : search.item}
                </div>
                <i class="btn" style="background-color:#5c4b44; color:white;"onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join(""));
  };

    let generatecoffee = () => {
      return (drink4.innerHTML = Coffee
        .map((x) => {
          let { id, name, price, desc, img } = x;
          let search = basket.find((x) => x.id === id) || [];
          return `
          <div id=product-id-${id} class="item">
            <a href="detail.html"><img width="100%" alt="${name} "src=${img} id="${id}" name="${price}" value="${desc}"onclick="savedata(this)"></a>
            <div class="details">
              <h3>${name}</h3>
              <div class="price-quantity">
                <h2>${price} ฿</h2>
                <div class="buttons">
                  <div id=${id} class="quantity" style="display:none;">
                  ${search.item === undefined ? 0 : search.item}
                  </div>
                  <i class="btn" style="background-color:#5c4b44; color:white;"onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join(""));
    };

generatemilk();
generatejuice();
generatetea();
generatecoffee();

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

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();