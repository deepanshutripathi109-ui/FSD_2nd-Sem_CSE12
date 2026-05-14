const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Smart Watch", price: 149.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Gaming Mouse", price: 45.00, image: "https://images.unsplash.com/photo-1527814732934-94a855cd81bb?w=500&q=80" },
    { id: 4, name: "Mechanical Keyboard", price: 89.00, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="img-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

displayProducts();
updateCartUI();