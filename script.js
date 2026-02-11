// Fade-in animations for sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

// Watch all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});