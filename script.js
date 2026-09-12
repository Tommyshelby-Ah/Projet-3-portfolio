// --- 1. Barre de progression au scroll (Trendline) ---
window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    document.getElementById("scroll-progress").style.width = scrolled;
});

// --- 2. Simulation de l'API XAU/USD (Variation aléatoire réaliste) ---
const goldPriceElement = document.getElementById('gold-price');
let currentPrice = 2450.50; // Prix de base fictif

function updateGoldPrice() {
    // Simule une petite variation entre -0.50 et +0.50
    const change = (Math.random() - 0.5).toFixed(2); 
    currentPrice = (currentPrice + parseFloat(change)).toFixed(2);
    
    goldPriceElement.innerText = `$${currentPrice}`;
    
    // Changement de couleur selon la tendance
    if (change > 0) {
        goldPriceElement.className = 'price-up';
    } else if (change < 0) {
        goldPriceElement.className = 'price-down';
    }
}
// Mise à jour toutes les 3 secondes
setInterval(updateGoldPrice, 3000);
updateGoldPrice();

// --- 3. Effet "Machine à écrire" ---
const words = ["Trader Gold", "Développeur Web", "Analyste SMC / ICT", "Intégrateur WP"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Pause avant d'effacer
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}
typingEffect();

// --- 4. Animation d'apparition au défilement (Intersection Observer) ---
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

hiddenElements.forEach((el) => observer.observe(el));

// --- 5. Menu Burger Mobile ---
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

// --- 6. Effet 3D sur les cartes (Vanilla Tilt léger) ---
const cards = document.querySelectorAll('.tilt-card');
cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; // Intensité de l'angle X
        const rotateY = ((x - centerX) / centerX) * 5;  // Intensité de l'angle Y
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});
