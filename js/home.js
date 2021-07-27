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
    console.log(id);
    localStorage.setItem('click', id);
  });
}

savedLocalStorage();
