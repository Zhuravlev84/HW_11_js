(async () => {
  try {
    const responce = await fetch('data.json');

    if (!responce.ok) {
      throw new Error('Faild from data.json');
    }

    const data = await responce.json();

    const productBox = document.querySelector('.product');

    data.forEach(({ name, img, description, price }) => {
      const productEl = `
      <div class="product__box">
      <img class="product__img" src="${img}" alt="${name}">
      <div class="product__content">
          <a href="product.html" class="product__heading">${name}</a>
          <p class="product__text">${description}</p>
          <p class="product__price">$${price}</p>
      </div>
  </div>
    `
      productBox.insertAdjacentHTML('beforeend', productEl)
    });
    

  } catch (error) {
    console.error(error);
  }
}).apply();
