import { songCreation } from "./canvas.js";

export default class SongPlayer {
  modal = document.querySelector('.modal');
  addButton = document.querySelector('.addPlaylist');

  constructor(musicController) {
    this.musicController = musicController;
  }

  addPlaylistModal() {
    this.addButton.addEventListener('click', () => {
      if (!this.modal.classList.contains('visible')) {
        this.modal.classList.add('visible');
      } else {
        this.modal.classList.remove('visible');
      }
    });
  }

  previous() {
    const _currentSong = localStorage['currentSong'];
    let currentSong = null;
    if (_currentSong) currentSong = parseInt(_currentSong)

    if (currentSong) {
      const currentListening = document.getElementById(`song-${currentSong - 1}`)
      if (currentListening) {
        const name = currentListening.dataset.name;
        const audio = currentListening.dataset.audio;
        localStorage['currentSong'] = currentSong - 1;
        this.currentSong(audio, name)
      }
    }
  }

  next() {
    const _currentSong = localStorage['currentSong'];
    let currentSong = null;
    if (_currentSong) currentSong = parseInt(_currentSong)

    if (currentSong) {
      const currentListening = document.getElementById(`song-${currentSong + 1}`)
      if (currentListening) {
        const name = currentListening.dataset.name;
        const audio = currentListening.dataset.audio;
        localStorage['currentSong'] = currentSong + 1;
        this.currentSong(audio, name)
      }
    }
  }

  start() {
    const controls = document.querySelector('.playButton');
    const music = document.querySelector('.music');
    controls.addEventListener('click', () => {
      if (controls.classList.contains('playButton')) {
        if (controls.classList.contains('stop')) {
          controls.src = '../img/stop-button.png';
          music.play();
        } else {
          controls.src = '../img/play-button.png';
          music.pause();
        }
        controls.classList.toggle('stop');
      }
    });
  }

  currentSong(audio, name) {
    const musicTitle = document.querySelector('.music__player--title span');
    const music = document.querySelector('.music');
    musicTitle.innerHTML = `${name}`;
    music.setAttribute('src', `${audio}`);
    music.load();
    songCreation(music);
    this.start();
  }
}
