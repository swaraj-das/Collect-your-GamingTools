var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "160px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});

// Show or hide the scroll-top button based on scroll position
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".scroll-top");
  if (window.pageYOffset > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

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
