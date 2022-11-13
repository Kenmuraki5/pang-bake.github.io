let drink1 = document.getElementById("Milk");
let drink2 = document.getElementById("Juice");
let drink3 = document.getElementById("Tea");
let drink4 = document.getElementById("Coffee");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generatemilk = () => {
  return (drink1.innerHTML = Milk
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <img width="100%" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
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



let generatejuice = () => {
  return (drink2.innerHTML = Juice
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
        <img width="100%" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
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

  let generatetea = () => {
    return (drink3.innerHTML = Tea
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
          <img width="100%" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
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

    let generatecoffee = () => {
      return (drink4.innerHTML = Coffee
        .map((x) => {
          let { id, name, price, desc, img } = x;
          let search = basket.find((x) => x.id === id) || [];
          return `
          <div id=product-id-${id} class="item">
            <img width="100%" src=${img} alt="">
            <div class="details">
              <h3>${name}</h3>
              <p>${desc}</p>
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