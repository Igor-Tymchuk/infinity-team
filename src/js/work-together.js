import { sendMessageAPI } from './work-together-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

const form = document.getElementById('workForm');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const modal = document.querySelector('.backdrop');
const successMessage = document.querySelector('.work-modal-title');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
});
