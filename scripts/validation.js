const validateSelectors = {
  formInput: '.popup__input',
  popupForm: '.popup__form',
  popupSubmitBtn: '.popup__submit',
  submitBtnDisabled: 'popup__submit_disabled',
};

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
function setEventListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.formInput));
  const popupSubmitBtn = form.querySelector(config.popupSubmitBtn);
  
  toggleButtonState(inputList, popupSubmitBtn, config);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input);
      toggleButtonState(inputList, popupSubmitBtn, config);
    });
  });
};
// ставим обработчик на все формы
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.popupForm));

  formList.forEach((form) => {
    setEventListeners(form, config);
  });
};
// связываем валидность всех инпутов на форме
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
// меняем кнопку
function toggleButtonState(inputList, button, config) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', true);
    button.classList.add(config.submitBtnDisabled);
  } else {
    button.removeAttribute('disabled');
    button.classList.remove(config.submitBtnDisabled);
  }
};

enableValidation(validateSelectors);