import throttle from 'lodash.throttle';
import { saveToLS } from './functions';
import { loadFromLS } from './functions';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  formElem: document.querySelector('.feedback-form'),
};
refs.formElem.addEventListener('submit', e => {
  e.preventDefault();

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = {};

  refs.formElem.reset();
});

refs.formElem.addEventListener(
  'input',
  throttle(e => {
    const value = e.target.value;
    const key = e.target.name;

    formData[key] = value;
    saveToLS(STORAGE_KEY, formData);
  }, 500)
);

let formData = loadFromLS(STORAGE_KEY) || {};
refs.formElem.elements.email.value = formData?.email || '';
refs.formElem.elements.message.value = formData?.message || '';

//===================
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   LOCALSTORAGE_KEY: 'feedback-form-state',
// };

// const formData = {
//   // email: input.value,
//   // message: textarea.value,
// };

// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   // console.log(formData);
// });

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(e) {
//   const value = e.target.value;

//   localStorage.setItem(STORAGE_KEY, value);
// }

// function populateTextarea(e) {
//   const savedText = localStorage.getItem(STORAGE_KEY);
//   if (savedText) {
//     console.log(savedText);
//     refs.textarea.value = savedText;
//   }
// }
//====================================================================
