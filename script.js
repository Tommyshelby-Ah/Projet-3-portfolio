// Sélectionner tous les éléments avec la classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Créer l'observateur
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si l'élément est visible à l'écran
        if (entry.isIntersecting) {
            // Ajouter la classe 'show' pour déclencher l'animation CSS
            entry.target.classList.add('show');
            // Optionnel : on cesse d'observer l'élément pour que l'animation ne se joue qu'une fois
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1, // L'animation se déclenche quand 10% de l'élément est visible
    rootMargin: "0px 0px -50px 0px" // Décale légèrement le déclenchement
});

// Appliquer l'observateur à chaque élément
hiddenElements.forEach((el) => observer.observe(el));
