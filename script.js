const buttonLogin = document.getElementById('login-button');
buttonLogin.addEventListener('click', () => {
  const inputEmail = document.getElementById('email').value;
  const inputSenha = document.getElementById('senha').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Pesquisei o removeAttribute em: https://pt.stackoverflow.com/questions/25332/verificar-se-tem-algum-checkbox-checado-e-habilitar-bot%C3%A3o
const agreement = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
agreement.addEventListener('click', () => {
  buttonSubmit.removeAttribute('disabled');
});

// Referencia: https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = '500';
textArea.addEventListener('input', (event) => {
  const target = event.target;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  const currentNumber = maxLength - currentLength;
  counter.innerHTML = currentNumber;
});
