var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
 window.onscroll = function() {
    updateProgressBar();
  };
  
  
  function updateProgressBar() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollPercent = (scrollTop / scrollHeight) * 100;
  
      document.getElementById("progressBar").style.width = scrollPercent + "%";
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

function performSearch(){
    let searchTerm = document.getElementById('search-input').value.toLowerCase();
    console.log(searchTerm);
    let cards = document.querySelectorAll('.row');

    cards.forEach(function (card) {
        let cardHeading = card.querySelector('.card-heading').innerText.toLowerCase();
        
        // Check if the search term is in the card heading or description
        if (cardHeading.includes(searchTerm)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}
function toggleSidebar() {
    const sidebar = document.getElementById("socialSidebar");
    const toggleArrow = document.getElementById("toggleArrow");
    if (sidebar.style.left === "0px" || sidebar.style.left === "") {

        sidebar.style.left = "-200px"; 
        toggleArrow.style.left = "0px"; 
    } else {
        sidebar.style.left = "0px"; 
        toggleArrow.style.left = "-40px"; 
    }
}