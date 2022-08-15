import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const messageInput = document.querySelector('textarea[name="message"]');
const emailInput = document.querySelector('input[name="email"]');

feedbackForm.addEventListener('input', throttle(addToLocalStorage, 500));
feedbackForm.addEventListener('submit', showLocalStorageData);

let dataObject = {};
fillInputsFromLocalStorage();
function addToLocalStorage() {
  dataObject = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function fillInputsFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
  dataObject = savedData;
}

function showLocalStorageData(e) {
  e.preventDefault();
  if (emailInput.value.trim() && messageInput.value.trim()) {
    console.log(dataObject);
    feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}
