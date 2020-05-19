// Header (не работает в Chrome)
// (function () {
//     const header = document.querySelector('.header');
//     window.onscroll = () => {
//         if (window.pageYOffset > 50) {
//             header.classList.add('header_active');
//         } else {
//             header.classList.remove('header_active');
//         }
//     };
// }());

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


