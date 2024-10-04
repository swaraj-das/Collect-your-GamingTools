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

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const progressRing = document.querySelector('.progress-ring__circle');
    const rootElement = document.documentElement;
    
    const radius = progressRing.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRing.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        progressRing.style.strokeDashoffset = offset;
    }

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        const scrolled = rootElement.scrollTop / scrollTotal;

        if (scrolled > 0.1) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }

        // Ensure smooth progress updates
        requestAnimationFrame(() => {
            setProgress(scrolled * 100);
        });
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    // Easter egg: Konami Code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        scrollToTopBtn.style.background = 'linear-gradient(145deg, #ff00ff, #00ffff)';
        scrollToTopBtn.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            scrollToTopBtn.style.background = '';
            scrollToTopBtn.style.transform = '';
        }, 3000);
    }
});