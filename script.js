var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
});

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

// Function to update mode for the scroll button
function updateScrollButtonMode() {
    const scrollButton = document.querySelector('.scroll-top');
    const isDarkMode = document.body.classList.contains('dark-mode'); // Check body for dark mode

    if (isDarkMode) {
        scrollButton.classList.add('dark-mode');
        scrollButton.classList.remove('light-mode');
    } else {
        scrollButton.classList.add('light-mode');
        scrollButton.classList.remove('dark-mode');
    }
}

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 200) {
        scrollButton.classList.remove('hidden');
    } else {
        scrollButton.classList.add('hidden');
    }
});

// Event listener for toggling mode (example toggle button listener)
document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode on body
    updateScrollButtonMode(); // Update button mode when toggled
});


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
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        console.log("Form found, adding event listener.");
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            alert("Thank you for your feedback!");
            form.reset(); // Clear the form
        });
    } else {
        console.log("Form not found, cannot add event listener.");
    }
});
