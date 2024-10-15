// Array of products with their details: id, image, title, and price
const product = [
    {
        id: 0,
        image: '../images/controller1.png',
        title: 'PS4 V2 Dualshock 4',
        price: 3999,
    },
    {
        id: 1,
        image: '../images/controller2.png',
        title: 'Xbox Wireless Controller',
        price: 3499,
    },
    {
        id: 2,
        image: '../images/controller3.png',
        title: 'Nintendo Switch Pro Controller',
        price: 4999,
    },
    {
        id: 3,
        image: '../images/headset.png',
        title: 'SteelSeries Arctis 7',
        price: 8999,
    },
    {
        id: 4,
        image: '../images/keyboard.png',
        title: 'Razer BlackWidow',
        price: 5499,
    },
    {
        id: 5,
        image: '../images/mouse.png',
        title: 'Logitech G502 Hero',
        price: 2999,
    },
    {
      id: 6,
      image: '../images/chair.png',
      title: 'Secretlab Omega',
      price: 24999,
    },
  ];
  
  // Create a unique set of categories based on products (though this is unnecessary here)
  const categories = [...new Set(product.map((item) => { return item }))];
  
  // Initialize index variable for product buttons
  let i = 0;
  
  // Render product items in the HTML by selecting the root element
  document.getElementById('root').innerHTML = categories.map((item) => {
    // Destructure the product details
    var { image, title, price } = item;
    
    // Return HTML string for each product
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>Rs ${price}.00</h2>` +
                "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
            `</div>
        </div>`
    )
  }).join('');
  
  // Initialize an empty cart array to hold selected products
  var cart = [];
  
  // Function to add an item to the cart
  function addtocart(a) {
    cart.push({ ...categories[a] }); // Add the selected product to the cart
    displaycart(); // Update the cart display
  }
  
  // Function to handle the buy now action (similar to add to cart but with an alert)
  function buyNow(a) {
    cart.push({ ...categories[a] }); // Add product to cart
    alert(`${categories[a].title} has been added to your cart!`); // Notify user
    displaycart(); // Update the cart display
  }
  
  // Function to delete an item from the cart
  function delElement(a) {
    cart.splice(a, 1); // Remove item at index a from the cart
    displaycart(); // Update the cart display
  }
  
  // Function to display the cart items
  function displaycart() {
    let j = 0, total = 0; // Initialize index and total price
    document.getElementById("count").innerHTML = cart.length; // Display cart count
    
    // Check if cart is empty
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty"; // Notify empty cart
        document.getElementById("total").innerHTML = "Rs " + 0 + ".00"; // Total is zero
    } else {
        // Map through cart items and generate HTML
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            // Destructure item details
            var { image, title, price } = items;
            total = total + price; // Add item price to total
            document.getElementById("total").innerHTML = "Rs " + total + ".00"; // Update total in cart
  
            // Return HTML for each cart item
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:15px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Rs ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
  }
  
  // Event listeners for cart toggle functionality
  let carts = document.getElementById('carts'); // Element to open cart
  let sidebox = document.getElementById('sidebox'); // Sidebar cart
  let mine = document.getElementById('mine'); // Element to close cart
  
  // Open cart sidebar when the cart button is clicked
  carts.addEventListener('click', function() {
      sidebox.style.display = 'block'; // Show cart sidebar
  })
  
  // Close cart sidebar when the close button is clicked
  mine.addEventListener('click', function() {
      sidebox.style.display = 'none'; // Hide cart sidebar
  })
  