document.addEventListener('DOMContentLoaded', function() {
    // Efecto de desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación para las tarjetas de categorias
    const cards = document.querySelectorAll('.container__main__grid__card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('click', () => {
            const data = card.getAttribute('data');
            window.location.href = `detalle-${data}.html`;
        });
    });

});