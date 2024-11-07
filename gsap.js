gsap.registerPlugin(ScrollTrigger);

// Select all product containers
document.querySelectorAll(".col-2").forEach((product) => {
  
  
  gsap.fromTo(
    product.querySelector(".color-box"), 
    {  rotation: 90,opacity:0 }, 
    { 
        opacity:1,  
      rotation: 0, 
      duration:0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: product,
        start: "top 80%",   
        end: "top 70%",
        
        scrub: true
      }
    }
  );

  // Animation for the controller image in each product
  gsap.fromTo(
    product.querySelector(".controller"), 
    { scale: 0.1, opacity: 0, },  // Initial state
    { 
      scale: 1, 
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.7)", 
      scrollTrigger: {
        trigger: product,
        start: "top 80%",   // Customize to control when each product animates
        end: "top 70%",
        scrub: true
      }
    }
  );
});
