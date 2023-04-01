const productList = {
  products: [
    {
      title: "A Pillow",
      imageURL:
        "https://www.slumbr.com/wp-rckXdgae/wp-content/uploads/2017/09/Why-should-I-upgrade-to-a-premium-pillow-932x666.jpg",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageURL:
        "http://www.homespaservices.net/uploads/1/1/2/2/112288729/blog-1_orig.png",
      price: 12.59,
      description: "A carpet whitch you might like!",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageURL}" alt="${prod.description}" />
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
