const burgerMenu = document.querySelector('.header__burger-menu');
burgerMenu.addEventListener('click', (item) => {
    burgerMenu.classList.toggle('active');
    console.log('clicked');
})