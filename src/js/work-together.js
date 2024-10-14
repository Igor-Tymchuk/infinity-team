import { sendMessageAPI } from './work-together-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

const form = document.querySelector('.work-form');
const emailInput = document.getElementById('email');
const modal = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.work-modal-btn');
const greenEmailIcon = document.querySelector('.work-icon-email');
const invalidEmailIcon = document.querySelector('.work-error-message');
const formBtn = document.querySelector('.work-btn')

export let formData = {};

async function handleForm(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.elements.email.value;
  const messageInput = form.elements.user_comment.value;

  formData = {
    email: emailInput,
    comment: messageInput,
  };

  try {
    const response = await sendMessageAPI(formData);
    if (!response) {
      iziToast.error({
        message: 'Error server',
        theme: 'dark',
        backgroundColor: 'red',
      });
    } else {
      modal.classList.add('is-open');
      document.body.classList.add('scroll-lock')
      form.reset();
      greenEmailIcon.style.fill = 'transparent';
    }
  } catch (error) {
    iziToast.error({
      message: 'Server error occurred. Please try again.',
      color: 'white',
      theme: 'dark',
      backgroundColor: 'red',
    });
  }
}

function closeModalWindow(event) {
  if (modal.classList.contains('is-open')) {
    modal.classList.remove('is-open');
    document.body.classList.remove('scroll-lock')
    formBtn.style.outline = 'none'
  } else if (event.key === 'Escape') {
    modal.classList.remove('is-open');
  }
}

function checkEmail(event) {
  if (emailInput.value.includes('@')) {
    greenEmailIcon.style.fill = 'var(--c-lt-elem-accent)'
    invalidEmailIcon.style.color = 'transparent';
  } else if (emailInput.value === '') {
    greenEmailIcon.style.fill = 'transparent';
    invalidEmailIcon.style.color = 'transparent';
  }
  else {
    greenEmailIcon.style.fill = 'transparent';
    invalidEmailIcon.style.color = 'var(--c-lt-error)';
  }
}

form.addEventListener('submit', handleForm);
modalCloseBtn.addEventListener('click', closeModalWindow);
modal.addEventListener('click', closeModalWindow);
window.addEventListener('keydown', closeModalWindow);
emailInput.addEventListener('input', checkEmail);
