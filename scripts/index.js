const selectors = {
  menu: ".header",
  langBox: ".header__lang-box",
  openBtn: ".presentation__open-menu",
  closeBtn: ".header__close-btn",
  workPopup: ".work-popup",
  openWorkPopBtn: ".portfolio__add-btn",
  closeWorkPopBtn: ".work-popup__close-btn",
  workForm: ".work-popup__form",
  workInputName: ".work-popup__input_name",
  workInputImage: ".work-popup__input_image",
  portfolioTitle: ".portfolio__title",
  skillsTemplate: ".skills-template",
  skillsPhoto: ".skills__photo",
  skillsName: ".skills__program-name",
  skillsContainer: ".skills__program",
  skillsSection: ".skills__programs",
  portfolioTemplate: ".portfolio-template",
  portfolioCard: ".portfolio__card",
  portfolioContainer: ".portfolio__cards",
  portfolioCloseBtn: ".portfolio__close-btn",
  portfoiloImage: ".portfolio__image",
  portfolioName: ".portfolio__sign",
};

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
  menu.classList.add("header_open");
  langBox.classList.add("header__lang-box_open");
}

function closeMenu() {
  menu.classList.remove("header_open");
  langBox.classList.remove("header__lang-box_open");
}

function openWorkPopup() {
  workPopup.classList.add("work-popup_open");
}

function closeWorkpopup() {
  workPopup.classList.remove("work-popup_open");
  workForm.reset();
}

function closeWorkByOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closeWorkpopup();
}

function createSkillsCard(name, image) {
  const template = document
    .querySelector(selectors.skillsTemplate)
    .content.querySelector(selectors.skillsContainer)
    .cloneNode(true);
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
      name: "Adobe Illustrator",
      image: "./images/AI.png",
    },
    {
      name: "Adobe After Effects",
      image: "./images/AE.png",
    },
    {
      name: "Adobe Photoshop",
      image: "./images/PS.png",
    },
    {
      name: "Figma",
      image: "./images/Figma.png",
    },
  ];

  initialSkills.forEach(function (card) {
    createSkillsCard(card.name, card.image);
  });
}

createInitialSkillsCard();

function createPortfolioCard(name, link) {
  const portfolioTemplate = document
    .querySelector(selectors.portfolioTemplate)
    .content.querySelector(selectors.portfolioCard)
    .cloneNode(true);
  const portfolioContainer = document.querySelector(
    selectors.portfolioContainer
  );
  const portfoiloImage = portfolioTemplate.querySelector(
    selectors.portfoiloImage
  );
  const portfolioName = portfolioTemplate.querySelector(
    selectors.portfolioName
  );
  const portfolioCloseBtn = portfolioTemplate.querySelector(
    selectors.portfolioCloseBtn
  );

  portfoiloImage.src = link;
  portfoiloImage.atl = name;
  portfolioName.textContent = name;

  portfolioCloseBtn.addEventListener("click", () => {
    portfolioTemplate.remove();
  });

  portfolioContainer.appendChild(portfolioTemplate);
}

function createInitialPortCard() {
  const initialPortfolio = [
    {
      name: "Online fashion store - Homepage",
      link: "./images/fashion.png",
    },
    {
      name: "Reebok Store - Concept",
      link: "./images/reebok_web.png",
    },
    {
      name: "Braun Landing Page - Concept",
      link: "./images/braun.png",
    },
  ];

  initialPortfolio.forEach((card) => {
    createPortfolioCard(card.name, card.link);
  });
}

createInitialPortCard();

function popupFormSbm(evt) {
  evt.preventDefault();
  createPortfolioCard(workInputName.value, workInputImage.value);
  closeWorkpopup();
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
openWorkPopBtn.addEventListener("click", openWorkPopup);
closeWorkPopBtn.addEventListener("click", closeWorkpopup);
workPopup.addEventListener("click", closeWorkByOverlay);
workForm.addEventListener("submit", popupFormSbm);
