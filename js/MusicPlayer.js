import SongPlayer from './modules/SongPlayer';

const canvas = document.getElementById('musicPlayerCanvas');
const ctx = canvas.getContext('2d');
const music = document.querySelector('.music');
const buttonPlayer = document.querySelectorAll('.js__listening');
const width = canvas.width;
const height = canvas.height;
const playButton = document.querySelector('.playButton');
let musicController = '';

function songCreation(audio) {
  const context = new AudioContext(); 
  const src = context.createMediaElementSource(audio);
  const analyser = context.createAnalyser(); 
  analyser.connect(context.destination);  
  analyser.fftSize = 512; 
  src.connect(analyser);
  const dataArray = new Uint8Array(analyser.frequencyBinCount); 
  const bufferLength = analyser.frequencyBinCount; 
  const barWidth = (width / bufferLength) * 1.5;
  let barHeight;
  let x = 0;

  function songAnimation() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = '#2A2438';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] + 150;
      const r = barHeight / 1.8 + ((i / bufferLength)) - 15;
      const g = 110 * (i / bufferLength);
      const b = 120 + i;
      ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
    requestAnimationFrame(songAnimation);
  }
  songAnimation();
}

function start(song) {
  playButton.addEventListener('click', (e) => {
    songCreation(song);
    if (e.target.classList.contains('active')) {
      playButton.src = '../img/play-button.png';
      song.pause();
    } else {
      playButton.src = '../img/stop-button.png';
      song.play();
    }
    e.target.classList.toggle('active');
  });
}

const especificSong = buttonPlayer.addEventListener('click', (data) => {
	musicController = data.songid;
  const musicName = data.name;
  music.src = data.audio;
  music.load();
  start(music);
});

const SongsList = new SongPlayer(arrayOfSongs, musicController);
SongsList.addPlaylist();
SongsList.previous();
SongsList.next();