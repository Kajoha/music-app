import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';
import Interaction from './modules/songIteraction.js';
import Musiclist from './modules/musiclist.js';
import Playlist from './modules/playlist.js';

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

  playButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--listening')) {
      const audio = e.target.dataset.audio;
      musicPlayer.controllers();
      songPlayer.currentSong(audio);
    }
    if (e.target.classList.contains('js--like')) {
      const song = e.target.dataset.id;
      interaction.addFavorite(song);
    }
    if (e.target.classList.contains('js--unlike')) {
      const song = e.target.dataset.id;
      interaction.removeFavorite(song);
      document.querySelector('.js--musiclist').innerHTML = '';
      musiclist.getFavorites();
    }
  });
}

const playlist = new Playlist(userId);
playlist.getPlaylists();

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
    play.addEventListener('click', (e) => {
      if (e.target.classList.contains('js--listening')) {
        const audio = e.target.dataset.audio;
        musicPlayer.controllers();
        songPlayer.currentSong(audio);
      }
      if (e.target.classList.contains('js--like')) {
        const song = e.target.dataset.id;
        interaction.addFavorite(song);
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

export { openMusicList, buttonMusicList, buttonPlaylist }
