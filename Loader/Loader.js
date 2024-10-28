// Load Lottie animation
const loader = document.getElementById("loader");
const animation = lottie.loadAnimation({
  container: loader, // the DOM element that will contain the animation
  renderer: "svg", // the rendering method
  loop: true, // loop the animation
  autoplay: true, // start playing the animation
  path: "https://lottie.host/f0db1198-7725-40df-91d4-15dcf396f3a2/vyKXUMpsxT.json", // the path to the animation JSON
});

window.onload = function () {
  setTimeout(function () {
    // Stop the animation and go to the last frame
    animation.stop();
    document.body.classList.add("loaded");
  }, 1500); // 1.5-second delay
};
