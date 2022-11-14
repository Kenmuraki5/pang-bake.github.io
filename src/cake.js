let cake1 = document.getElementById("ButterCake");
let cake2 = document.getElementById("icecreamecake");
let cake3 = document.getElementById("new");
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

let savedata = (obj) => {
  const person = {
    id: obj.getAttribute("id"),
    name: obj.getAttribute("name"),
    src: obj.getAttribute("src"),
    desc:obj.getAttribute("value"),
  }
  window.localStorage.setItem('user',   JSON.stringify(person));
};

let generatebutttercake = () => {
  return (cake1.innerHTML = ButterCake
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <a href="detail.html"><img width="100%" src=${img} id="${id}" name="${name}" value="${desc}"onclick="savedata(this)"></a>
        <div class="details">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <div id=${id} class="quantity" style="display:none;">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i class="btn btn-primary" onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};


let generateicescreamcake = () => {
  return (cake2.innerHTML = icecreamecake
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <a href="detail.html"><img width="100%" src=${img} id="${id}" name="${name}" value="${desc}"onclick="savedata(this)"></a>
        <div class="details">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <div id=${id} class="quantity" style="display:none;">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i class="btn btn-primary" onclick="increment(${id})" class="bi bi-plus-lg">add to cart</i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};
generatebutttercake();
generateicescreamcake();

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