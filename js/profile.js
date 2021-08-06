import Musiclist from './modules/musiclist.js';
import Playlist from './modules/playlist.js';
import User from './modules/userName.js';
import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';

const userId = localStorage.getItem('UserId');
const profile = document.querySelector('.js-account');

function changenameDom() {
  fetch(`https://kaju-music.herokuapp.com/user/${userId}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const userDom = new User(data, null);
      userDom.nameDOM();
    });
}

function saveName(name) {
  name.style.borderBottom = 'none';
  name.setAttribute('contenteditable', 'false');
  const currentUserName = {
    "name": `${name.innerHTML}`,
  };
  const changeNameOfUser = new User(currentUserName, userId);
  changeNameOfUser.updateName();
}

function logoutUser(logoutButton) {
  if (logoutButton.classList.contains('js--logoutButton')) {
    localStorage.clear();
  }
}

profile.addEventListener('click', (e) => {
  if (e.target.classList.contains('js--editName')) {
    const UserName = document.querySelector('.account__userName--name');
    if (!e.target.classList.contains('save')) {
      e.target.innerHTML = 'Save name';
      UserName.setAttribute('contenteditable', 'true');
      UserName.style.borderBottom = '1px solid white';
    }
    else {
      UserName.style.borderBottom = 'none';
      e.target.innerHTML = 'Edit';
      saveName(UserName);
    }
    e.target.classList.toggle('save');
  }
  logoutUser(e.target);
});

const musiclist = new Musiclist(userId);
musiclist.getRecent();

window.onload = function () {
  const filters = document.getElementsByClassName('js--musicList');

  Array.from(filters).forEach((element) => {
    element.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      document.querySelector('.js--musiclist').innerHTML = '';
      switch (filter) {
        case 'recently':
          musiclist.getRecent();
          break;
        case 'favorites':
          musiclist.getFavorites();
          break;
        default:
          break;
      }
    });
  });

  const playButton = document.querySelector('.js--playSong');
  playButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--listening')) {
      const audio = e.target.dataset.audio;
      const musicPlayer = new MusicPlayer();
      musicPlayer.controllers();
      const songPlayer = new SongPlayer();
      songPlayer.currentSong(audio);
    }
  });
};

const playlist = new Playlist(userId);
playlist.getPlaylists();

function listSongs() {
  const list = document.querySelector('.js--title');
  list.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    document.querySelector('.js--playlist').innerHTML = '';
    const id = clicElement.getAttribute('data-id');
    playlist.getPlaylist(id);
  });
}

listSongs();
changenameDom();
