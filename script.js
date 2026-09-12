// --- Animations au défilement ---
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1, 
    rootMargin: "0px 0px -50px 0px"
});

hiddenElements.forEach((el) => observer.observe(el));

// --- Menu Burger Mobile ---
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active-menu');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active-menu');
    });
});
