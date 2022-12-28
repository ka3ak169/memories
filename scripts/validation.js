const validateSelectors = {
  workPopupform: '.work-popup__form',
  workPopupformInput: '.work-popup__input',
  feedbackPopupform: '.feedback-popup__form',
  feedbackPopupformInput: '.feedback-popup__input',
  formInput: '.popup__input',
  popupForm: '.popup__form',
  popupSubmitBtn: '.popup__submit',
};

const workPopupform = document.querySelector(validateSelectors.workPopupform);
const workPopupformInput = workPopupform.querySelector(validateSelectors.workPopupformInput);
const workPopupformError = workPopupform.querySelector(`.${workPopupformInput.id}-error`);
const feedbackPopupform = document.querySelector(validateSelectors.feedbackPopupform);
const feedbackPopupformInput = feedbackPopupform.querySelector(validateSelectors.feedbackPopupformInput);
const feedbackPopupformError = feedbackPopupform.querySelector(`.${feedbackPopupform.id}-error`);


// показываем ошибку
function showInputError(form, input, errorMessage) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = errorMessage;
};
// скрываем ошибку
function hideInputError(form, input) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = '';
};
// проверяем валидность
function isValid(form, input) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
};
// слушаем все формы
function setEventListeners(form) {
  const inputList = Array.from(form.querySelectorAll(validateSelectors.formInput));
  const popupSubmitBtn = form.querySelector(validateSelectors.popupSubmitBtn);
  
  toggleButtonState(inputList, popupSubmitBtn);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input);
      toggleButtonState(inputList, popupSubmitBtn);
    });
  });
};
// ставим обработчик на все формы
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(validateSelectors.popupForm));

  formList.forEach((form) => {
    setEventListeners(form);
  });
};
// связываем валидность всех инпутов на форме
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
// меняем кнопку
function toggleButtonState(inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', true);
    button.classList.add('popup__submit_disabled');
  } else {
    button.removeAttribute('disabled');
    button.classList.remove('popup__submit_disabled');
  }
};

enableValidation();