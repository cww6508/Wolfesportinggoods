// Product array to hold dynamic product data
let products = JSON.parse(localStorage.getItem('products')) || [];

// Function to add a product to the list
function addProduct(name, description, imageUrl) {
    const product = { name, description, imageUrl };
    products.push(product);
    saveProducts();
    displayProducts();
}

// Function to save products to localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Function to display the products dynamically
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the list

    products.forEach((product) => {
        const productItem = `
            <div class="product">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        productList.innerHTML += productItem;
    });
}

// Handle form submission
const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;

    addProduct(productName, productDescription, productImage);

    // Clear the form
    productForm.reset();
});

// Display products on page load
document.addEventListener('DOMContentLoaded', displayProducts);
