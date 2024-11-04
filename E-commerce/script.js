document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.header, .categories, .small-container, .offer, .footer');
        
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check when page loads

    // Button Click Animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 150);
        });
    });
});