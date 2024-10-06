var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}


  

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text-animated');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Use a staggered effect for animation
                setTimeout(() => {
                    if (index % 2 === 0) {
                        entry.target.classList.add('fadeIn'); // Apply fade-in animation
                    } else {
                        entry.target.classList.add('scaleIn'); // Apply scale animation
                    }
                }, index * 200); // Delay for staggered effect

                observer.unobserve(entry.target); // Stop observing after animation
            } else {
                entry.target.classList.remove('fadeIn', 'scaleIn'); // Remove classes when out of view
            }
        });
    }, options);

    textElements.forEach(textElement => {
        observer.observe(textElement); // Observe each text element
    });
});
=======
=======
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

