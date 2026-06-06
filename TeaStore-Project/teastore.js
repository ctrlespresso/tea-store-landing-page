const sliders = document.querySelectorAll('.slider-wrapper');

sliders.forEach((slider) => {
    const cards = slider.querySelector('.tea-cards');
    const leftBtn = slider.querySelector('.left-arrow');
    const rightBtn = slider.querySelector('.right-arrow');

    rightBtn.addEventListener('click', () => {
        cards.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    leftBtn.addEventListener('click', () => {
        cards.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
});

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);