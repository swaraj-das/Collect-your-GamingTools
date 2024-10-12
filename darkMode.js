// Get the toggle checkbox
const toggleSwitch = document.getElementById('toggleDarkMode');

// Check if user has previously selected dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Event listener for the dark mode toggle
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
