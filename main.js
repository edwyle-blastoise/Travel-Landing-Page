// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav');
    const close = document.querySelector('.nav-close');
    const menuLinks = document.querySelectorAll('.header-link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active')
    });
    if (window.innerWidth <= 767) {
        for (link of menuLinks) {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            })
        }
    }
}());

//Scrolling
(function () {
    const anchors = document.querySelectorAll('.js-scroll');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    window.onbeforeunload = function() {window.scrollTo(0,0);}
}());


