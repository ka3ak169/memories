const selectors = {
  menu: '.header',
  langBox: '.header__lang-box',
  openBtn: '.presentation__open-menu',
  closeBtn: '.header__close-btn',
  workPopup: '.work-popup',
  openWorkPopBtn: '.portfolio__add-btn',
  closeWorkPopBtn: '.work-popup__close-btn',
  workForm: '.work-popup__form',
  workInputName: '.work-popup__input_name',
  workInputImage: '.work-popup__input_image',
  portfolioTitle: '.portfolio__title',
  skillsTemplate: '.skills-template',
  skillsPhoto: '.skills__photo',
  skillsName: '.skills__program-name',
  skillsContainer: '.skills__program',
  skillsSection: '.skills__programs',
  
}

const menu = document.querySelector(selectors.menu);
const langBox = menu.querySelector(selectors.langBox);
const openBtn = document.querySelector(selectors.openBtn);
const closeBtn = langBox.querySelector(selectors.closeBtn);
const workPopup = document.querySelector(selectors.workPopup);
const openWorkPopBtn = document.querySelector(selectors.openWorkPopBtn);
const closeWorkPopBtn = workPopup.querySelector(selectors.closeWorkPopBtn);
const workForm = workPopup.querySelector(selectors.workForm);
const workInputName = workForm.querySelector(selectors.workInputName);
const workInputImage = workForm.querySelector(selectors.workInputImage);
const portfolioTitle = document.querySelector(selectors.portfolioTitle);



function openMenu() {
  menu.classList.add('header_open');
  langBox.classList.add('header__lang-box_open');
}

function closeMenu() {
  menu.classList.remove('header_open');
  langBox.classList.remove('header__lang-box_open');
}

function openWorkPopup() {
  workInputName.value = portfolioTitle.textContent;
  workPopup.classList.add('work-popup_open');
}

function closeWorkpopup() {
  workPopup.classList.remove('work-popup_open');
}

function closeWorkByOverlay(evt) {
  if(evt.target !== evt.currentTarget) {
    return
  };
  closeWorkpopup();
}

function handleFormSbm(evt) {
  evt.preventDefault();
  portfolioTitle.textContent = workInputName.value;
}

function createSkillsCard(name, image) {
  const template = document.querySelector(selectors.skillsTemplate).content.querySelector(selectors.skillsContainer).cloneNode(true);
  const skillsSection = document.querySelector(selectors.skillsSection);
  const skillsPhoto = template.querySelector(selectors.skillsPhoto);
  const skillsName = template.querySelector(selectors.skillsName);

  skillsPhoto.src = image;
  skillsPhoto.alt = name;
  skillsName.textContent = name;

  skillsSection.appendChild(template);
}

function createInitialSkillsCard() {
  const initialSkills = [
    {
      name: 'Adobe Illustrator',
      image: './images/AI.png',
    },
    {
      name: 'Adobe After Effects',
      image: './images/AE.png',
    },
    {
      name: 'Adobe Photoshop',
      image: './images/PS.png',
    },
    {
      name: 'Figma',
      image: './images/Figma.png',
    },
  ];

  initialSkills.forEach(function(card) {
    createSkillsCard(card.name, card.image);
  });
}

createInitialSkillsCard();


openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
openWorkPopBtn.addEventListener('click', openWorkPopup);
closeWorkPopBtn.addEventListener('click', closeWorkpopup);
workPopup.addEventListener('click', closeWorkByOverlay);
workForm.addEventListener('submit', handleFormSbm);