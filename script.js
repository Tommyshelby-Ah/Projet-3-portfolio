// 1. Gestion du formulaire de contact (Simulation d'envoi)
const contactForm = document.querySelector('.contact-form');
const btnEnvoyer = document.querySelector('.btn-envoyer');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Changement d'état du bouton pour confirmer l'envoi
        const texteOriginal = btnEnvoyer.textContent;
        btnEnvoyer.textContent = 'Message envoyé avec succès ! ✓';
        btnEnvoyer.style.backgroundColor = '#28a745'; // Vert de validation

        // Réinitialisation du formulaire
        contactForm.reset();

        // Retour à l'état normal après 3 secondes
        setTimeout(() => {
            btnEnvoyer.textContent = texteOriginal;
            btnEnvoyer.style.backgroundColor = ''; // Reprend la couleur CSS
        }, 3000);
    });
}

// 2. Mise en surbrillance du menu actif au défilement (ScrollSpy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Détecte quelle section est actuellement visible à l'écran
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Ajoute une classe 'active' au lien correspondant
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 3. Animation d'apparition des éléments au défilement (Intersection Observer)
const observerOptions = {
    threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // L'animation ne se joue qu'une seule fois
        }
    });
}, observerOptions);

// Sélectionne les éléments à animer
const elementsToAnimate = document.querySelectorAll('.service-card, .gauche, .droite, .a-propos-haut, .competence');
elementsToAnimate.forEach(el => {
    el.classList.add('hidden-element'); // Ajoute la classe de masquage initial
    observer.observe(el);
});