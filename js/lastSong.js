import LoadArtists from './modules/artists.js';
import User from './modules/userName.js';
import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';

const LastSongButton = document.querySelector('.lastSong__player--button img');
const userId = localStorage.getItem('UserId');

function ActualUserName() {
  fetch(`https://kaju-music.herokuapp.com/user/${userId}`, {
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

const musicPlayer = new MusicPlayer();

window.onload = function () {
  const playButton = document.querySelector('.js--listening');
  playButton.addEventListener('click', (e) => {
    const audio = e.target.dataset.audio;
    musicPlayer.controllers();
    const songPlayer = new SongPlayer();
    songPlayer.currentSong(audio);
  });
  savedLocalStorage();
};

fetch(`https://kaju-music.herokuapp.com/recent?userId=${userId}`).then((response) => response.json()).then((data) => {
  const recents = data.data;
  const id = recents[0];

  fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then((response) => response.json()).then((song) => {
    const currentSound = song.audio;
    LastSongButton.dataset.audio = currentSound;
  });
});

function addPlaylist() {
  const clickModal = document.querySelector('.musicPlayer__controls');
  clickModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--addPlaylist')) {
      musicPlayer.addingPlaylists();
      console.log(e)
    }
  });
}

addPlaylist();
