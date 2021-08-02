import { loggedPerson, addPerson } from "./form.js";

const SingIn = document.querySelector('.js__select--signin');
const LogIn = document.querySelector('.js__select--login');
const FormSingIn = document.querySelector('.js--signin');
const FormLogIn = document.querySelector('.js--login');
const RegisterForm = document.querySelector('.register__form');
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

RegisterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (RegisterForm.elements[2].value === RegisterForm.elements[3].value) {
    passwordValidator.style.display = 'none';
  } else {
    passwordValidator.style.display = 'block';
  }
});

SignInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fieldsValidator = document.querySelector('.register__form--incompleteInfo');
  fieldsValidator.style.display = 'none';
  if (SignInForm.elements[0].value === '' || SignInForm.elements[1].value === ''
      || SignInForm.elements[2].value === '' || SignInForm.elements[3].value === '') {
      fieldsValidator.style.display = 'block';
  } else {
    const inputs = {
      'name': `${SignInForm.elements[0].value}`,
      'email': `${SignInForm.elements[1].value}`,
      'password': `${SignInForm.elements[2].value}`
    }
    SignInForm.elements[0].value = '';
    SignInForm.elements[1].value = '';
    SignInForm.elements[2].value = '';
    SignInForm.elements[3].value = '';
    addPerson(inputs);
  }
})

LoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = {
      'email': `${LoginForm.elements[0].value}`,
      'password': `${LoginForm.elements[1].value}`
    }
    SignInForm.elements[0].value = '';
    SignInForm.elements[1].value = '';
    loggedPerson(inputs);
});

function loadArtists(data) {
  const divContent = document.querySelector('.js--artists');
  const apiData = data;
  let artists = '';

  for (let i = 0; i < apiData.length; i += 1) {
    artists += `
    <div class="artists__home">
    <img class="artists__home--img" src="${apiData[i].image}" alt="">
    <h3 data-id="${apiData[i].id}" class="artists__home--name cursor"><a href="./artist.html">${apiData[i].name}</a></h3>
    </div>
    `;
  }
  divContent.innerHTML = artists;
}

const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
fetch(apiArtists).then((response) => response.json()).then((data) => {
  loadArtists(data);
});

function savedLocalStorage() {
  document.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    const id = clicElement.getAttribute('data-id');
    localStorage.setItem('click', id);
  });
}

savedLocalStorage();

export {loadArtists};