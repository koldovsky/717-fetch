(async function () {
  
  const response = await fetch('api/products.json');
  const products = await response.json();
  let rates;
  let currentCategory = "";
  let rate = 1;
  renderProducts();

  // fetch('api/products.json')
  //   .then( response => response.json() )
  //   .then( products => renderProducts(products) );

  // AJAX:
  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     const products = JSON.parse(xhr.responseText);
  //     renderProducts(products);
  //   }
  // }
  // xhr.open('get', 'api/products.json', true);
  // xhr.send();

  function renderProducts() {
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
            Buy - ${(product.price * rate).toFixed(2)}
          </button>
        </div>
      </article>`;
    }
  }
  // renderProducts(products);
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

  const convertCurrencyButton = document.querySelector('.convert-currency');
  convertCurrencyButton.addEventListener('click', convertCurrency);

  async function convertCurrency() {
    const currency = document.querySelector('.currency').value;
    if (!rates) {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      rates = await response.json();
    }
    rate = rates.rates[currency];
    renderProducts();
  }

})();
