// Get all counter elements
console.log("sdsd");
const counters = document.querySelectorAll(".counter");

// Function to animate the counters
function animateCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const updateCounter = () => {
      const increment = target / 100; // Adjust increment value for speed
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 30); // Adjust speed of animation
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// Run the counter animation when the window is scrolled to the section
window.addEventListener("scroll", () => {
  const section = document.querySelector(".second-section");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.75) {
    animateCounters();
    window.removeEventListener("scroll", animateCounters);
  }
});

// Initial check in case the section is already visible on page load
window.addEventListener("load", () => {
  const section = document.querySelector(".second-section");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.75) {
    animateCounters();
    window.removeEventListener("scroll", animateCounters);
  }
});
