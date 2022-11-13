let cake1 = document.getElementById("Milk");
let cake2 = document.getElementById("Juice");
let cake3 = document.getElementById("Tea");
let cake4 = document.getElementById("Coffee");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generatemilk = () => {
  return (cake1.innerHTML = Milk
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
let generatemilk2 = () => {
    return (document.getElementById("Milk2").innerHTML = Milk2
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
  return (cake2.innerHTML = Juice
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
let generatejuice2 = () => {
    return (document.getElementById("Juice2").innerHTML = Juice2
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
    return (cake3.innerHTML = Tea
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
  let generatetea2 = () => {
      return (document.getElementById("Tea2").innerHTML = Tea2
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
      return (cake4.innerHTML = Coffee
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
    let generatecoffee2 = () => {
        return (document.getElementById("Coffee2").innerHTML = Coffee2
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
generatemilk2();
generatejuice();
generatejuice2();
generatetea();
generatetea2();
generatecoffee();
generatecoffee2();

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