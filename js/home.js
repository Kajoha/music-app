import { loggedPerson, addPerson } from './modules/form.js';
import LoadArtists from './modules/artists.js';

const SingIn = document.querySelector('.js__select--signin');
const LogIn = document.querySelector('.js__select--login');
const FormSingIn = document.querySelector('.js--signin');
const FormLogIn = document.querySelector('.js--login');
const passwordValidator = document.querySelector('.register__form--paragraph');
const SignInForm = document.querySelector('.js--signin form');
const LoginForm = document.querySelector('.js--login form');

SingIn.addEventListener('click', () => {
  LogIn.classList.remove('js--active');
  LogIn.classList.add('js--unactive');
  SingIn.classList.remove('js--unactive');
  FormSingIn.style.display = 'block';
  FormLogIn.style.display = 'none';
});

LogIn.addEventListener('click', () => {
  SingIn.classList.add('js--unactive');
  LogIn.classList.add('js--active');
  LogIn.classList.remove('js--unactive');
  FormLogIn.style.display = 'block';
  FormSingIn.style.display = 'none';
});

SignInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fieldsValidator = document.querySelector('.register__form--incompleteInfo');
  fieldsValidator.style.display = 'none';
  if (SignInForm.elements[0].value === '' || SignInForm.elements[1].value === ''
    || SignInForm.elements[2].value === '' || SignInForm.elements[3].value === '') {
    fieldsValidator.style.display = 'block';
  }else if(SignInForm.elements[2].value != SignInForm.elements[3].value){
    passwordValidator.style.display = 'block';
  }else {
    passwordValidator.style.display = 'none';
    const inputs = {
      'name': `${SignInForm.elements[0].value}`,
      'email': `${SignInForm.elements[1].value}`,
      'password': `${SignInForm.elements[2].value}`,
    };
    SignInForm.elements[0].value = '';
    SignInForm.elements[1].value = '';
    SignInForm.elements[2].value = '';
    SignInForm.elements[3].value = '';
    addPerson(inputs);
  }
});

LoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = {
    'email': `${LoginForm.elements[0].value}`,
    'password': `${LoginForm.elements[1].value}`,
  };
  SignInForm.elements[0].value = '';
  SignInForm.elements[1].value = '';
  loggedPerson(inputs);
});

const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
fetch(apiArtists).then((response) => response.json()).then((data) => {
  const loard = new LoadArtists(data);
  loard.addArtists(false);
});

function savedLocalStorage() {
  const artist = document.querySelector('.home__artist');
  artist.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    const id = clicElement.getAttribute('data-id');
    localStorage.setItem('click', id);
  });
}

savedLocalStorage();
