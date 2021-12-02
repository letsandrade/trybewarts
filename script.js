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
  buttonSubmit.removeAttribute("disabled");
});

const textArea = document.getElementById('textarea');

