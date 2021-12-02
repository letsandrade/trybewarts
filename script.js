const buttonLogin = document.getElementById('login-button');
buttonLogin.addEventListener('click', function() {
  const inputEmail = document.getElementById('email').value;
  const inputSenha = document.getElementById('senha').value;
  if (inputEmail == 'tryber@teste.com' && inputSenha == '123456') {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
})
