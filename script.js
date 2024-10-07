// Cache DOM elements
const menuList = document.querySelector('.menu-list');
const scrollTopButton = document.querySelector('.scroll-top');

// Toggle menu function with computed style
function toggleMenu() {
    const computedStyle = window.getComputedStyle(menuList);
    if (computedStyle.maxHeight === "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

// Scroll to top function
function scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo(0, 0);
    }
}

// Function to show/hide scroll-to-top button
function handleScroll() {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Debounce scroll event to optimize performance
let isScrolling;
window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScroll, 100); // 100ms debounce delay
});

// Check scroll position on page load
window.addEventListener('load', function () {
    handleScroll(); // Ensure button is hidden if page loads at the top
});
