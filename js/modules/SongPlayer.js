import { songCreation } from "./canvas.js";

export default class SongPlayer {
  previousButton = document.querySelector('.previousButton');
  nextButton = document.querySelector('.nextButton');
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

  previous(data) {
    this.previousButton.addEventListener('click', () => {
      this.musicController -= 1;
      if (this.musicController < 0) {
        this.musicController = data.length - 1;
      }
      console.log(data[this.musicController].audio);
      this.musicTitle.innerHTML = data[this.musicController].name;
    });
  }

  next(data) {
    this.nextButton.addEventListener('click', () => {
      this.musicController += 1;
      if (this.musicController > data.length - 1) {
        this.musicController = 0;
      }
      console.log(data[this.musicController].audio);
      this.musicTitle.innerHTML = data[this.musicController].name;
    });
  }


  start(){
    const controls = document.querySelector('.playButton');
    const music = document.querySelector('.music');
    controls.addEventListener('click', () => {
      if(controls.classList.contains('playButton')){
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
  currentSong(audio,name){
    const musicTitle = document.querySelector('.music__player--title span');
    const music = document.querySelector('.music');
    musicTitle.innerHTML = `${name}`;
    music.setAttribute('src',`${audio}`);
    music.load();
    songCreation(music);
    this.start();
  }
}
