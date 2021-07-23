/*
export default class SongPlayer {
  previousButton = document.querySelector('.previousButton');
  nextButton = document.querySelector('.nextButton');
  musicTitle = document.querySelector('.music__player--title span');
  modal = document.querySelector('.music__player--modal');
  constructor(arrayOfSongs, musicController) {
    this.musicController = musicController; 
    this.data = arrayOfSongs;
  }

  addPlaylist() {
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
}
*/