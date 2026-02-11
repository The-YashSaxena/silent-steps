// Typing Animation for Hero Title
const heroTitle = document.querySelector('.hero-title');
const text = 'Welcome to My Website';
let index = 0;

function type() {
    if (index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.onload = type;

// Fade-in Animation for Sections
const sections = document.querySelectorAll('section');

const options = { root: null, threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
