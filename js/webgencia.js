document.querySelectorAll('.buttons-hero-webgencia a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche l'action par défaut du lien
        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la cible
        const targetElement = document.getElementById(targetId); // Trouve l'élément cible

        if (targetElement) {
            // Fait défiler la page jusqu'à l'élément cible
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
