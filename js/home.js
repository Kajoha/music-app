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

const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const divContent = document.querySelector('.js--artists');
console.log(divContent);

function loadArtists(data) {
  const apiData = data;
  let artists = '';

  for (let i = 0; i < apiData.length; i += 1) {
    artists += `
     <div class="artists__home" data-id="${apiData[i].id}">
     <img class="artists__home--img" src="${apiData[i].image}" alt="">
     <h3 class="artists__home--name cursor">${apiData[i].name}</h3>

     </div>
    `;
  }
  divContent.innerHTML = artists;
}

fetch(apiArtists).then((response) => response.json()).then((data) => {
  loadArtists(data);
});
