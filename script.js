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

// Update progress bar on scroll
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercent + "%";
}

// DOM Content loaded event
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    handleScroll(); // Ensure the scroll-to-top button state is correct on load
});

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    body.classList.toggle("dark-mode", themeToggle.checked);

    // Save the user's preference in localStorage
    if (themeToggle.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load theme from localStorage on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const themeToggle = document.getElementById("theme-toggle");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }
};

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.querySelector('.social-sidebar');
    const toggleArrow = document.querySelector('.toggle-arrow');

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        toggleArrow.style.display = "none";
    } else {
        sidebar.style.display = "none";
        toggleArrow.style.display = "block";
    }
}

// Perform search function
function performSearch() {
    let searchTerm = document.getElementById("search-input").value.toLowerCase();
    console.log(searchTerm);
    let cards = document.querySelectorAll(".row");

    cards.forEach(function (card) {
        let cardHeading = card.querySelector(".card-heading").innerText.toLowerCase();

        if (cardHeading.includes(searchTerm)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}

// Send email function
async function SendEmail(e) {
    e.preventDefault();
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Message = document.getElementById("message").value;

    try {
        const response = await fetch("http://localhost:5000/email/SendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name, Email, Message }),
        });

        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Error sending email");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the email.");
    }
}

// FAQ toggle function
document.querySelectorAll('.faq input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const answer = this.nextElementSibling.nextElementSibling;
        if (this.checked) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0px';
        }
    });
});
