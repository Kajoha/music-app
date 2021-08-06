import SongPlayer from '../js/modules/SongPlayer.js';
const canvas = document.getElementById('musicPlayerCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const music = document.querySelector('.music');
const playButton = document.querySelector('.musicPlayer__controls');
let musicController = 3;

fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/aurora', {
  method: "GET"
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    songs(data);
  })
  .catch((error) => {
    console.log("error", error);
  });

function songs(data) {
  music.src = data[musicController].audio;
  music.load();
  start(music);
}

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
    analyser.getByteFrequencyData(dataArray)
    ctx.fillStyle = '#180534';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] - 150;
      let r = barHeight + 299 / 1.8 + ((i / bufferLength)) - 15;
      let g = 110 * (i / bufferLength);
      let b = 120 + i;
      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x + 2, height - barHeight, barWidth, barHeight - 1);
      x += barWidth + 1;
    }
    requestAnimationFrame(songAnimation);
  }
  songAnimation()
}


function start(song) {
  playButton.addEventListener('click', (e) => {
    songCreation(song);
    if (e.target.classList.contains('playButton')) {
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

const SongsList = new SongPlayer(data, musicController);
SongsList.addPlaylistModal();
SongsList.previous();
SongsList.next();
