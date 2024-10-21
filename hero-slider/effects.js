let slideIndex = 1;
showSlides(slideIndex);

// Function to automatically change slides every 4 seconds
let autoSlide = setInterval(function() {
  nextSlide();
}, 4000); // Change the interval to 4000 milliseconds (4 seconds)

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide(n) {
  clearInterval(autoSlide); // Stop the auto slide when a dot is clicked
  slideIndex = n;
  showSlides(slideIndex);
  autoSlide = setInterval(function() {
    nextSlide();
  }, 4000); // Restart the auto slide after user interaction with 4 seconds delay
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Add "active" class to the current dot
  dots[slideIndex - 1].classList.add("active");
}
