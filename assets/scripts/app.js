class Product {
  // title = "DEFAULT";
  // imageURL;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Oreder now!</button>
    `;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("added to cart...");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageURL}" alt="${this.product.description}" />
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.slumbr.com/wp-rckXdgae/wp-content/uploads/2017/09/Why-should-I-upgrade-to-a-premium-pillow-932x666.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "http://www.homespaservices.net/uploads/1/1/2/2/112288729/blog-1_orig.png",
      "A carpet whitch you might like!",
      12.59
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEL = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEL);
  }
}

const shop = new Shop();
shop.render();
