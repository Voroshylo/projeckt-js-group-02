import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const InputLengthBeforeCut = 20;

const wtGlobal = {
    wtFillingForm: document.querySelector('#work-together-form'),
    wtModal: document.querySelector('.work-together-modal-wrapper'),
    wtResultMsg: document.querySelector('.filling-result-msg'),
    wtModalRespTitle: document.querySelector('#work-together-modal-resp-title'),
    wtModalRespMessage: document.querySelector('#work-together-modal-resp-message'),
    wtModalClose: document.querySelector('.work-together-modal-close'),
    wtModalBox: document.querySelector('.work-together-modal')
};

wtGlobal.wtFillingForm.addEventListener('submit', sendWtUserData);
wtGlobal.wtFillingForm.elements.email.addEventListener('input', resetValidation);
wtGlobal.wtFillingForm.elements.email.addEventListener('blur', emailValidator);
wtGlobal.wtFillingForm.elements.email.addEventListener('blur', inputCutString);
wtGlobal.wtFillingForm.elements.email.addEventListener('focus', inputFullString);
wtGlobal.wtFillingForm.elements.comment.addEventListener('blur', inputCutString);
wtGlobal.wtFillingForm.elements.comment.addEventListener('focus',inputFullString);
wtGlobal.wtModal.addEventListener('click', closeWtModal);
window.addEventListener('keydown', closeWtModal);


async function sendWtUserData(event) {
    event.preventDefault();
  
    const email = wtGlobal.wtFillingForm.elements.email.value;
    const comment = wtGlobal.wtFillingForm.elements.comment.value;
  
    try {
      const response = await PostRequest(email, comment);
      handleSuccess(response); 
      wtGlobal.wtFillingForm.reset(); // Очищення форми після успішного відправлення
    } catch (error) {
      handleFailure(error);
    }
  }

  async function PostRequest(email, comment){
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/requests';
    const url = BASE_URL + END_POINT;

    const options = {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          comment: comment,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
    
      return await fetch(url, options).then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        return resp.json();
      });
}

function handleSuccess(response) {
    const { title, message } = response;
    openWtModal({ title, message });
  }
  
  function handleFailure(error) {
    console.error('Request failed:', error);
    wtGlobal.wtResultMsg.textContent = 'Failed to send message. Please try again later.';
  }

 

function openWtModal({ title, message }) {
    wtGlobal.wtModalRespTitle.textContent = title;
    wtGlobal.wtModalRespMessage.textContent = message;
    wtGlobal.wtModal.classList.add('IsOpen');
    wtGlobal.wtModal.addEventListener('click', closeWtModal);
    window.addEventListener('keydown', closeWtModal);
  }
  
  function closeWtModal(event) {
    if (
      !wtGlobal.wtModalBox.contains(event.target) ||
      event.target === wtGlobal.wtModalClose ||
      event.code === 'Escape'
    ) {
      wtGlobal.wtModal.classList.remove('IsOpen');
      wtGlobal.wtResultMsg.textContent = '';
      wtGlobal.wtModal.removeEventListener('click', closeWtModal);
      window.removeEventListener('keydown', closeWtModal);
    }
  }
  
  function emailValidator(event) {
    event.target.value = event.target.value.trim();
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!event.target.value) {
      resetValidation(event);
      return;
    }
    if (event.target.value.match(pattern)) {
      showValidationSuccess();
    } else {
      showValidationInvalid();
    }
  }
  
  function showValidationSuccess() {
    const { email } = wtGlobal.wtFillingForm.elements;
    email.classList.remove('Invalid');
    email.classList.add('Success');
    wtGlobal.wtResultMsg.textContent = 'Success!';
    wtGlobal.wtResultMsg.classList.add('Success');
  }
  
  function showValidationInvalid() {
    const { email } = wtGlobal.wtFillingForm.elements;
    email.classList.remove('Success');
    email.classList.add('Invalid');
    wtGlobal.wtResultMsg.textContent = 'Invalid email, try again';
    wtGlobal.wtResultMsg.classList.remove('Success');
  }
  
  function resetValidation(event) {
    if (event.target.name === 'email') {
      wtGlobal.wtResultMsg.textContent = '';
      wtGlobal.wtResultMsg.classList.remove('Success');
    }
    const { email } = wtGlobal.wtFillingForm.elements;
    email.classList.remove('Invalid');
    email.classList.remove('Success');
  }
  
  function inputCutString(event) {
    event.target.setAttribute('data-value', event.target.value.trim());
    if (event.target.value.length > InputLengthBeforeCut) {
      event.target.value = event.target.value
        .slice(0, InputLengthBeforeCut - 3)
        .concat('...');
    }
  }
  
  function inputFullString(event) {
    if (event.target.value) event.target.value = event.target.getAttribute('data-value');
  }

