////////////////////// Active Nav //////////////////////////////////

// Get the current URL path
const currentPath = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-bar');

// Loop through each link
navLinks.forEach(link => {
  // Check if the link's href matches the current path
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// Responsive Nav //
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  const rightNav = document.getElementById("right-nav");

  navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("visible");
    rightNav.classList.toggle("visible");
  });
});


