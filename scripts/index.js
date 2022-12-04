const menu = document.querySelector('.header');
const langBox = menu.querySelector('.header__lang-box');
const openBtn = document.querySelector('.presentation__open-menu');
const closeBtn = langBox.querySelector('.header__close-btn');


const openMenu = function() {
  menu.classList.add('header_open');
  langBox.classList.add('header__lang-box_open');
}

const closeMenu = function() {
  menu.classList.remove('header_open');
  langBox.classList.remove('header__lang-box_open');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);