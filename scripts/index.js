const menu = document.querySelector('.header');
const langBox = menu.querySelector('.header__lang-box');
const openBtn = document.querySelector('.presentation__open-menu');
const closeBtn = langBox.querySelector('.header__close-btn');
const workPopup = document.querySelector('.work-popup');
const openWorkPopBtn = document.querySelector('.portfolio__add-btn');
const closeWorkPopBtn = workPopup.querySelector('.work-popup__close-btn');



const openMenu = function() {
  menu.classList.add('header_open');
  langBox.classList.add('header__lang-box_open');
}

const closeMenu = function() {
  menu.classList.remove('header_open');
  langBox.classList.remove('header__lang-box_open');
}

const openWorkPopup = function() {
  workPopup.classList.add('work-popup_open');
}

const closeWorkpopup = function() {
  workPopup.classList.remove('work-popup_open');
}

const closeWorkByOverlay = function(evt) {
  console.log(evt.target, evt.currentTarget);
  if(evt.target !== evt.currentTarget) {
    return
  };
  closeWorkpopup();
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
openWorkPopBtn.addEventListener('click', openWorkPopup);
closeWorkPopBtn.addEventListener('click', closeWorkpopup);
workPopup.addEventListener('click', closeWorkByOverlay)