const SingIn = document.querySelector('.userOptionsSignin');
const LogIn = document.querySelector('.userOptionsLogin');
const FormSingIn = document.querySelector('.userForm__signin form');
const FormLogIn = document.querySelector('.userForm__login form');

SingIn.addEventListener('click', () => {
  LogIn.classList.remove('activeForm');
  LogIn.classList.add('unactiveForm');
  SingIn.classList.remove('unactiveForm');
  FormSingIn.style.display = 'flex';
  FormLogIn.style.display = 'none';
});

LogIn.addEventListener('click', () => {
  SingIn.classList.add('unactiveForm');
  LogIn.classList.add('activeForm');
  LogIn.classList.remove('unactiveForm');
  FormLogIn.style.display = 'flex';
  FormSingIn.style.display = 'none';
});
