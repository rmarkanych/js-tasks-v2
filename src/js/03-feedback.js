import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const messageInput = document.querySelector('textarea[name="message"]');
const emailInput = document.querySelector('input[name="email"]');

feedbackForm.addEventListener('input', throttle(addToLocalStorage, 500));
feedbackForm.addEventListener('submit', showLocalStorageData);

let dataObject = {};
newFun();
function addToLocalStorage() {
  dataObject = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function newFun() {
  let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  let newData = JSON.parse(savedData);

  if (newData) {
    emailInput.value = newData.email;
    messageInput.value = newData.message;
  }
}

function showLocalStorageData(e) {
  e.preventDefault();
  if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
    console.log(dataObject);
    feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}
