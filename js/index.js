const SingIn = document.querySelector('.js__select--signin');
const LogIn = document.querySelector('.js__select--login');
const FormSingIn = document.querySelector('.js--signin');
const FormLogIn = document.querySelector('.js--login');

SingIn.addEventListener('click', () => {
  LogIn.classList.remove('js--active');
  LogIn.classList.add('js--unactive');
  SingIn.classList.remove('js--unactive');
  FormSingIn.style.display = 'flex';
  FormLogIn.style.display = 'none';
});

LogIn.addEventListener('click', () => {
  SingIn.classList.add('js--unactive');
  LogIn.classList.add('js--active');
  LogIn.classList.remove('js--unactive');
  FormLogIn.style.display = 'flex';
  FormSingIn.style.display = 'none';
});
