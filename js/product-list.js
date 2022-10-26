(function () {
  const products = [
    {
      id: "1",
      title: "Baby Yoda",
      imageUrl: "img/baby-yoda.svg",
      description: "Baby Yoda Sticker...",
      category: "sport",
      price: 9.99,
    },
    {
      id: "2",
      title: "Banana",
      imageUrl: "img/banana.svg",
      description: "Banana Sticker...",
      category: "sport",
      price: 8.99,
    },
    {
      id: "3",
      title: "Girl",
      imageUrl: "img/girl.svg",
      description: "Girl Sticker...",
      category: "fun",
      price: 7.99,
    },
    {
      id: "4",
      title: "Viking",
      imageUrl: "img/viking.svg",
      description: "Viking Sticker...",
      category: "fun",
      price: 8.99,
    },
  ];
  let currentCategory = "";
  function renderProducts(products) {
    const productsContainer = document.querySelector(".main-products__list");
    productsContainer.innerHTML = "";
    const filteredProducts = products.filter(
      (product) => currentCategory === '' ? true : product.category === currentCategory
    );
    for (const product of filteredProducts) {
      productsContainer.innerHTML += `
      <article class="product-card">
        <img
          class="product-card__image"
          src="${product.imageUrl}"
          alt="${product.title}"
        />
        <h3 class="product-card__h3">${product.title}</h3>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__buttons">
          <button class="product-card__buttons-info button button-card">
            Info
          </button>
          <button class="product-card__buttons-buy button button-card">
            Buy - $${product.price}
          </button>
        </div>
      </article>`;
    }
  }
  renderProducts(products);
  document.querySelector(".category-sport").addEventListener("click", (ev) => {
    clearActiveCategories();
    ev.target.classList.add('active');
    currentCategory = 'sport';
    renderProducts(products);
  });
  document.querySelector(".category-fun").addEventListener("click", (ev) => {
    clearActiveCategories();
    ev.target.classList.add('active');
    currentCategory = 'fun';
    renderProducts(products);
  });
  document.querySelector(".category-all").addEventListener("click", (ev) => {
    clearActiveCategories();
    ev.target.classList.add('active');
    currentCategory = '';
    renderProducts(products);
  });
  function clearActiveCategories() {
    const categoryButtons = document.querySelectorAll('.category');
    for (const button of categoryButtons) {
      button.classList.remove('active');
    }
  };

})();
