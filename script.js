// script.js

// Typing animation for hero title
const heroTitle = document.querySelector('.hero-title');
const titleText = 'Welcome to Silent Steps';
let i = 0;

function typeTitle() {
    if (i < titleText.length) {
        heroTitle.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeTitle);

// Fade-in animations for sections on scroll
const sections = document.querySelectorAll('section');

function fadeInOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenBottom = window.innerHeight;
        if (sectionTop < screenBottom * 0.75) {
            section.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Initial check if sections are visible
