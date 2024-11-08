// const checkbox = document.getElementById('checkbox')
// const modeLabel = document.getElementById('mode-label')

// // Check if dark mode is already enabled
// if (localStorage.getItem('theme') === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'dark')
//     checkbox.checked = true
//     modeLabel.textContent = 'Dark Mode'
// }

// // Add event listener for toggle switch
// checkbox.addEventListener('change', () => {
//     if (checkbox.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark')
//         localStorage.setItem('theme', 'dark')
//         modeLabel.textContent = 'Dark Mode'
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light')
//         localStorage.setItem('theme', 'light')
//         modeLabel.textContent = 'Light Mode'
//     }
// })

// Variables
const themeToggle = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

// Determine current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Apply the previously selected theme, if any
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeToggle.checked = selectedTheme === 'dark'; // Set checkbox based on theme
}

// Toggle theme on checkbox change
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle(darkTheme);
  
  // Save selected theme
  localStorage.setItem('selected-theme', getCurrentTheme());
});
