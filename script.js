// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example of an animation (fade-in)
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const scrollY = window.scrollY;

  elements.forEach(el => {
    if (el.offsetTop - window.innerHeight / 1.2 < scrollY) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
