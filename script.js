var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "160px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

let cart = [];
const cartCount = document.getElementById("cart-count");
const cartList = document.getElementById("cart-list");
const cartItemsDiv = document.getElementById("cart-items");

// Add event listener to all 'Add to Cart' buttons
const cartButtons = document.querySelectorAll("#cart-btn");

cartButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const product = `Product ${index + 1}`; // Assuming each product has a unique name like 'Product 1', 'Product 2', etc.
    addToCart(product);
  });
});

function addToCart(product) {
  // Add product to the cart array
  cart.push(product);
  updateCart();
}

function updateCart() {
  // Update cart count in the navbar
  cartCount.innerText = cart.length;

  // Clear and update the cart list
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    cartList.appendChild(li);
  });

  // Show cart items section if the cart is not empty
  if (cart.length > 0) {
    cartItemsDiv.style.display = "block";
  }
}

// Show cart items when clicking on the cart icon
const cartNav = document.getElementById("cart-nav");
cartNav.addEventListener("click", function () {
  // Toggle the visibility of the cart items section
  cartItemsDiv.style.display =
    cartItemsDiv.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});

// Show or hide the scroll-top button based on scroll position
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".scroll-top");
  if (window.pageYOffset > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode', themeToggle.checked);

    // Save the user's preference in localStorage
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load theme from localStorage on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
};
