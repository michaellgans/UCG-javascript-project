// Sample item to add to the cart
const item = {
    name: "Sample Product",
    price: 10.00
};

// Get references to DOM elements
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");
const addItemBtn = document.getElementById("addItemBtn");

// Cart state
let cartItems = [];
let total = 0;

// Function to update the cart display and total
function updateCart() {
    // Clear current cart display
    cartDiv.innerHTML = '';

    // Display all cart items
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartDiv.appendChild(cartItemDiv);
    });

    // Update the total
    totalSpan.textContent = total.toFixed(2);
}

// Function to add an item to the cart
function addItemToCart() {
    // Add the item to the cart
    cartItems.push(item);

    // Update the total
    total += item.price;

    // Update the cart display
    updateCart();
}

// Event listener for the button click
addItemBtn.addEventListener("click", addItemToCart);

