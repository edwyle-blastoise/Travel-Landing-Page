// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav');
    const close = document.querySelector('.nav-close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active')
    });
}());


