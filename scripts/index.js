const selectors = {
  menu: '.header',
  page: '.page',
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
  portfolioTemplate: '.portfolio-template',
  portfolioCard: '.portfolio__card',
  portfolioContainer: '.portfolio__cards',
  portfolioCloseBtn: '.portfolio__close-btn',
  portfoiloImage: '.portfolio__image',
  portfolioName: '.portfolio__sign',
  messageOpenBtn: '.footer__button',
  messageCloseBtn: '.feedback-popup__close-btn',
  feedbackPopup: '.feedback-popup',
  feedbackPopupForm: '.feedback-popup__form',
  popupSbmBtn: '.popup__submit',
};

const menu = document.querySelector(selectors.menu);
const page = document.querySelector(selectors.page);
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
const skillsSection = document.querySelector(selectors.skillsSection);
const skillsTemplate = document.querySelector(selectors.skillsTemplate);
const portfolioTemplate = document.querySelector(selectors.portfolioTemplate);
const portfolioContainer = document.querySelector(selectors.portfolioContainer);
const feedbackPopup = document.querySelector(selectors.feedbackPopup);
const messageCloseBtn = feedbackPopup.querySelector(selectors.messageCloseBtn);
const messageOpenBtn = document.querySelector(selectors.messageOpenBtn);
const feedbackPopupForm = feedbackPopup.querySelector(selectors.feedbackPopupForm);

function openMenu() {
  menu.classList.add('header_open');
  langBox.classList.add('header__lang-box_open');
};

function closeMenu() {
  menu.classList.remove('header_open');
  langBox.classList.remove('header__lang-box_open');
};

function openPopup(popup) {
  popup.classList.add('popup_open');  
};

function closePopup(popup) {
  popup.classList.remove('popup_open');
  const popupSbmBtn = popup.querySelector(selectors.popupSbmBtn);
  popupSbmBtn.classList.add('popup__submit_disabled');
  popupSbmBtn.setAttribute('disabled', true);
};

function closeWorkByOverlay(popup) {
 popup.addEventListener('click', (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
 });
};

function createSkillsCard(name, image, template) {
  const skillsCard = template.content
    .querySelector(selectors.skillsContainer)
    .cloneNode(true);

  const skillsPhoto = skillsCard.querySelector(selectors.skillsPhoto);
  const skillsName = skillsCard.querySelector(selectors.skillsName);

  skillsPhoto.src = image;
  skillsPhoto.alt = name;
  skillsName.textContent = name;

  return skillsCard;
};

function renderSkillsCard(data, place) {
  place.appendChild(createSkillsCard(data.name, data.image, skillsTemplate));
};

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

  initialSkills.forEach(function (card) {
    renderSkillsCard(card, skillsSection);
  });
};

createInitialSkillsCard();

function createPortfolioCard(name, link, template) {
  const portfolioCard = template.content
    .querySelector(selectors.portfolioCard)
    .cloneNode(true);

  const portfoiloImage = portfolioCard.querySelector(selectors.portfoiloImage);
  const portfolioName = portfolioCard.querySelector(selectors.portfolioName);
  const portfolioCloseBtn = portfolioCard.querySelector(
    selectors.portfolioCloseBtn
  );

  portfoiloImage.src = link;
  portfoiloImage.atl = name;
  portfolioName.textContent = name;

  portfolioCloseBtn.addEventListener('click', () => {
    portfolioCard.remove();
  });

  return portfolioCard;
};

function renderPortfolioCard(data, place) {
  place.appendChild(createPortfolioCard(data.name, data.link, portfolioTemplate));
};

function createInitialPortCard() {
  const initialPortfolio = [
    {
      name: 'Online fashion store - Homepage',
      link: './images/fashion.png',
    },
    {
      name: 'Reebok Store - Concept',
      link: './images/reebok_web.png',
    },
    {
      name: 'Braun Landing Page - Concept',
      link: './images/braun.png',
    },
  ];

  initialPortfolio.forEach((card) => {
    renderPortfolioCard(card, portfolioContainer);
  });
};

createInitialPortCard();

function popupFormSbm(evt) {
  evt.preventDefault();

  const data = {
    name: workInputName.value,
    link: workInputImage.value,
  };
  renderPortfolioCard(data, portfolioContainer);
  workForm.reset();
  closePopup(workPopup);
};


function starChange(evt) {
  if (evt.target.classList.contains('skills__star')) {
    evt.target.classList.toggle('skills__star_actvie');
  }
  // console.log(evt.target);
  // console.log(evt.currentTarget);
};

function popupFeedbackSbm(evt) {
  evt.preventDefault();
  feedbackPopupForm.reset();
  closePopup(feedbackPopup);
  alert('форму отправили!');
}

page.addEventListener('click', starChange);
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
openWorkPopBtn.addEventListener('click', () => { openPopup(workPopup) });
closeWorkPopBtn.addEventListener('click', () => { closePopup(workPopup) });
messageOpenBtn.addEventListener('click', () => { openPopup(feedbackPopup) });
messageCloseBtn.addEventListener('click', () => { closePopup(feedbackPopup) });
closeWorkByOverlay(workPopup);
closeWorkByOverlay(feedbackPopup);
workForm.addEventListener('submit', popupFormSbm);
feedbackPopupForm.addEventListener('submit', popupFeedbackSbm);