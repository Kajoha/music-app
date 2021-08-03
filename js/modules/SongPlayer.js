export default class SongPlayer {
  previousButton = document.querySelector('.previousButton');
  nextButton = document.querySelector('.nextButton');
  musicTitle = document.querySelector('.music__player--title span');
  modal = document.querySelector('.modal');
  addButton = document.querySelector('.addPlaylist');
  music = document.querySelector('.music');

  constructor() {

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
    this.previousButton.addEventListener('click', () => {
      this.musicController -= 1;
      if (this.musicController < 0) {
        this.musicController = this.data.length - 1;
      }
      console.log(this.data[this.musicController].audio);
      this.musicTitle.innerHTML = this.data[this.musicController].name;
    });
  }

  next() {
    this.nextButton.addEventListener('click', () => {
      this.musicController += 1;
      if (this.musicController > this.data.length - 1) {
        this.musicController = 0;
      }
      console.log(this.data[this.musicController].audio);
      this.musicTitle.innerHTML = this.data[this.musicController].name;
    });
  }

  start(song,event) {
    /*
    if (event.classList.contains('active')) {
      playButton.src = '../img/play-button.png';
      song.pause();
    } else {
      playButton.src = '../img/stop-button.png';
      song.play();
    }
    event.classList.toggle('active');
    */
  }

  currentSong() {
    this.music.src;
    console.log(this.music.src);
    this.music.load();
    this.start(this.music);
  }
}
