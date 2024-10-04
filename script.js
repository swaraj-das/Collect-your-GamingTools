var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "160px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  document.querySelector(".navbar").classList.toggle("dark-mode");


  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️"; 
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙"; 
  }
});

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme === "dark") {
    body.classList.add("dark-mode");
    document.querySelector(".navbar").classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
};
