var menuList = document.getElementById("menuList");
menuList.style.height = "0px";
menuList.style.paddingTop = "0px";
menuList.style.display = "block";
menuList.style.position = "fixed";
menuList.style.borderRadius = "20px";

function toggleMenu() {
    if (menuList.style.height == "0px") {
        menuList.style.height = "auto";
        menuList.style.paddingTop = "20px";
    } else {
        menuList.style.height = "0px";
        menuList.style.paddingTop = "0px";
    }
}
 window.onscroll = function() {
    updateProgressBar();
  };

function updateProgressBar() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollPercent = (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar").style.width = scrollPercent + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});


window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var height = window.innerHeight;
  
  if (scrollPosition > 100) {
      document.getElementById("scrollTopBtn").style.display = "block";
  } else {
      document.getElementById("scrollTopBtn").style.display = "none";
  }
});

// Scroll to Top Smoothly
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

//function to remove sidebar upon clicking close button
function toggleSidebar() {
  var sidebar = document.getElementById("SideBar");
  var sidebarContent = document.getElementById("sidebar-content");
  if (sidebar) {
    // Remove the sidebar element and its content
    sidebar.remove();
    sidebarContent.remove();
  } else {
    console.error("Sidebar element not found");
  }
}

function performSearch() {
  let searchTerm = document.getElementById("search-input").value.toLowerCase();
  console.log(searchTerm);
  let cards = document.querySelectorAll(".row");

  cards.forEach(function (card) {
    let cardHeading = card
      .querySelector(".card-heading")
      .innerText.toLowerCase();

    // Check if the search term is in the card heading or description
    if (cardHeading.includes(searchTerm)) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
}

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
