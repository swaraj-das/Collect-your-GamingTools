var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
// Show or hide the scroll-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function addToCart(button) {
    // Show the tooltip
    const tooltip = button.querySelector('.tooltip');
    tooltip.style.display = 'block';

    // Change the button text
    const cartText = button.querySelector('small');
    cartText.textContent = 'Proceed to Checkout';
    button.onclick = function() {
        window.location.href = 'payment/checkout.html'; 
    };

    // Hide the tooltip after a few seconds
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 2000); // Tooltip will disappear after 2 seconds
}
