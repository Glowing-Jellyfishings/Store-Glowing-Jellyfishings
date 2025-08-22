async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  const container = document.getElementById('products');

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}

async function viewCart() {
  const cartIds = JSON.parse(localStorage.getItem('cart')) || [];
  const res = await fetch('/api/products');
  const products = await res.json();
  const cartItems = products.filter(p => cartIds.includes(p.id));

  const cartSection = document.getElementById('cart');
  cartSection.innerHTML = '';
  cartSection.classList.remove('hidden');

  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<h4>${item.name}</h4><p>$${item.price}</p>`;
    cartSection.appendChild(div);
  });
}

loadProducts();
