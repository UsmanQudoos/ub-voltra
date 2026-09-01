alert("cart.js connected");
// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart
function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your Cart is Empty</h2>";
        total.innerHTML = "0";
        return;
    }

    cart.forEach(function(product, index) {

        totalPrice += product.price;

        cartItems.innerHTML += `
        <div class="cart-item">

            <img src="${product.image}" width="80">

            <div class="info">
                <h3>${product.name}</h3>
                <p>Rs ${product.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>
        `;

    });

    total.innerHTML = totalPrice;
}

// Remove product
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// Clear cart
function clearCart() {

    localStorage.removeItem("cart");

    cart = [];

    displayCart();

}

// Continue shopping
function goHome() {

    window.location.href = "index.html";

}

// Start
displayCart();