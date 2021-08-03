import SongPlayer from '../js/modules/SongPlayer.js';

import CanvasAnimation from './modules/canvas.js';

let music = document.querySelector('.music');
let Play = document.querySelector('.js--playsong');

Play.addEventListener('click',() =>{
  const SongsList = new SongPlayer(music);
  SongsList.addPlaylistModal();
  SongsList.previous();
  SongsList.next();
  SongsList.currentSong();

  const canvas = new CanvasAnimation(music);
  canvas.songAnimation();
  canvas.songCreation()
})

