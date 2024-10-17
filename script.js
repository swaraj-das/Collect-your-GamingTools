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
      const scrolled = (rootElement.scrollTop / scrollTotal) * 100;

      // Show or hide the scroll-to-top button based on scroll position
      if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('show');
      } else {
          scrollToTopBtn.classList.remove('show');
      }

      // Update progress circle
      requestAnimationFrame(() => {
          setProgress(scrolled);
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
  const sidebar = document.querySelector('.social-sidebar');
  const toggleArrow = document.querySelector('.toggle-arrow');
  
  // Check if the sidebar is currently visible
  if (sidebar.style.display === "none") {
      // If hidden, show the sidebar and hide the toggle arrow
      sidebar.style.display = "block";
      toggleArrow.style.display = "none";
  } else {
      // If visible, hide the sidebar and show the toggle arrow
      sidebar.style.display = "none";
      toggleArrow.style.display = "block";
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

// faq
document.querySelectorAll('.faq input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const answer = this.nextElementSibling.nextElementSibling; // FAQ answer div
    if (this.checked) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0px';
    }
  });
});


function testimonialJs() {
  const swiper = new Swiper('.swiper', {
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
}
testimonialJs();

// Optional JS for additional button click effect
document.querySelector('.contact-btn').addEventListener('click', function() {
  this.classList.add('clicked');
  setTimeout(() => {
      this.classList.remove('clicked');
  }, 300);
});
