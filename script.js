var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

const row = document.querySelector('.row');
    row.addEventListener('mousemove', (e) => {
        const width = row.offsetWidth;
        const height = row.offsetHeight;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        const xPercent = mouseX / width * 100;
        const yPercent = mouseY / height * 100;

        row.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #ff6062, #ff3527)`;
    });

    row.addEventListener('mouseleave', () => {
        // Reset gradient when the mouse leaves
        row.style.background = 'linear-gradient(45deg, #ffffff, #ff3c6d)';
    });

document.querySelectorAll('.row').forEach((row) => {
    row.addEventListener('mousemove', (e) => {
        const rect = row.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        row.style.setProperty('--x', x);
        row.style.setProperty('--y', y);
    });
});
    
