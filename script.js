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
    const progressRing = scrollToTopBtn.querySelector('circle');
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
            scrollToTopBtn.classList.add('opacity-100', 'visible');
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }

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

    // Initial check in case the page is already scrolled on load
    handleScroll();
});