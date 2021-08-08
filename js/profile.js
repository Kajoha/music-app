import User from './modules/userName.js';
import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';
import Interaction from './modules/songIteraction.js';
import Musiclist from './modules/musiclist.js';
import Playlist from './modules/playlist.js';

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

function hearthAnimation(currentSongOfList) {
  currentSongOfList.addEventListener('click', (e) => {
    if (e.target.classList.contains('musicList__like--hearth')) {
      e.target.classList.toggle('is-active');
    }
  });
}

const playlist = new Playlist(userId);
playlist.getPlaylists();

const musiclist = new Musiclist(userId);
musiclist.getRecent();

function openMusicList() {
  const filters = document.getElementsByClassName('js--musicList');
  Array.from(filters).forEach((element) => {
    element.addEventListener('click', (e) => {
      document.querySelector('.js--musiclist').innerHTML = '';
      const filter = e.target.dataset.filter;
      if (filter === 'recently') {
        musiclist.getRecent();
      }
      if (filter === 'favorites') {
        musiclist.getFavorites();
      }
    });
  });
}

const interaction = new Interaction(userId);
const musicPlayer = new MusicPlayer();
const songPlayer = new SongPlayer();

function buttonMusicList() {
  const playButton = document.querySelector('.js--playSong');
  hearthAnimation(playButton);
  playButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--listening')) {
      localStorage['currentSong'] = e.target.dataset.index;
      const musicName = e.target.dataset.name;
      const audio = e.target.dataset.audio;
      musicPlayer.controllers();
      songPlayer.currentSong(audio, musicName);

      const next = document.querySelector('.nextButton');
      next.addEventListener('click', () => {
        songPlayer.next();
      });

      const previous = document.querySelector('.previousButton');
      previous.addEventListener('click', () => {
        songPlayer.previous();
      });
    }
    if (e.target.classList.contains('js--like')) {
      const song = e.target.dataset.id;
      interaction.addFavorite(song);
    }
    if (e.target.classList.contains('js--unlike')) {
      const song = e.target.dataset.id;
      interaction.removeFavorite(song);
      document.querySelector('.js--musiclist').innerHTML = '';
      setTimeout(() => {
        musiclist.getFavorites();
      }, 1000);
    }
  });
}

function buttonPlaylist() {
  const list = document.querySelector('.js--title');
  list.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    document.querySelector('.js--playlist').innerHTML = '';
    const id = clicElement.getAttribute('data-id');
    if (event.target.classList.contains('js--songs')) {
      playlist.getPlaylist(id);
    }
    if (event.target.classList.contains('js--deleteList')) {
      playlist.deletePlaylist(id);
    }

    const play = document.querySelector('.js--playlist');
    hearthAnimation(play);
    play.addEventListener('click', (e) => {
      if (e.target.classList.contains('js--listening')) {
        const audio = e.target.dataset.audio;
        localStorage['currentSong'] = e.target.dataset.index;
        musicPlayer.controllers();
        songPlayer.currentSong(audio);

        const next = document.querySelector('.nextButton');
        next.addEventListener('click', () => {
          songPlayer.next();
        });

        const previous = document.querySelector('.previousButton');
        previous.addEventListener('click', () => {
          songPlayer.previous();
        });
      }
      if (e.target.classList.contains('js--like')) {
        const song = e.target.dataset.id;
        interaction.addFavorite(song);
        document.querySelector('.js--musiclist').innerHTML = '';
        setTimeout(() => {
          musiclist.getFavorites();
        }, 1500);
      }
      if (e.target.classList.contains('js--delete')) {
        const song = e.target.dataset.id;
        interaction.removeSongPlaylist(id, song);
        document.querySelector('.js--playlist').innerHTML = '';
        playlist.getPlaylist(id);
      }
    });
  });
}

window.onload = function () {
  openMusicList();
  buttonMusicList();
  buttonPlaylist();
};

changenameDom();
