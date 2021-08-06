import LoadArtists from './modules/artists.js';
import User from './modules/userName.js';
import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';

const userIdStorage = localStorage.getItem('UserId');

function ActualUserName() {
  fetch(`https://kaju-music.herokuapp.com/user/${userIdStorage}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const actualUser = new User(data, null);
      actualUser.UserHomeName();
    });
}

fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists').then((response) => response.json()).then((data) => {
  const load = new LoadArtists(data);
  load.addArtists();
});

ActualUserName();

function savedLocalStorage() {
  const artist = document.querySelector('.home__artist');
  artist.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    const id = clicElement.getAttribute('data-id');
    localStorage.setItem('click', id);
  });
}

savedLocalStorage();

window.onload = function () {
  const playButton = document.querySelector('.js--listening');
  playButton.addEventListener('click', (e) => {
    const audio = e.target.dataset.audio;
    const musicPlayer = new MusicPlayer();
    musicPlayer.controllers();
    const songPlayer = new SongPlayer();
    songPlayer.currentSong(audio);
  });
};
