export default class SongPlayer {
  previousButton = document.querySelector('.previousButton');
  nextButton = document.querySelector('.nextButton');
  musicTitle = document.querySelector('.music__player--title span');
  modal = document.querySelector('.modal');
  addButton = document.querySelector('.addPlaylist');
  controls = document.querySelector('.musicPlayer__controls');
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
    controls.addEventListener('click', (e) => {
      if(e.target.classList.contains('playButton')){
        if (e.target.classList.contains('active')) {
          e.target.src = '../img/play-button.png';
          song.pause();
        } else {
          e.target.src = '../img/stop-button.png';
          song.play();
        }
        e.target.classList.toggle('active');
      }
    });
  }
}
