const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav')) {
    navMain.classList.remove('main-nav');
    navMain.classList.add('main-nav--opened');
  }else {
    navMain.classList.add('main-nav');
    navMain.classList.remove('main-nav--opened');
  }
});
