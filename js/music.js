let canvas = document.getElementById("musicPlayerCanvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
const previousButton = document.querySelector('.previousButton')
const playButton = document.querySelector('.playButton')
const nextButton = document.querySelector('.nextButton')
let music = document.querySelector('.music');
let musicTitle = document.querySelector('.music__player--title span');
let musicController = 0;

const MusicApi = () => {
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
      song(data[2].audio)
      previousSong(data);
      nextSong(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

MusicApi()


function song(data) {
  music.src = data;
  music.crossOrigin = "anonymous";
  music.load();
  PlaySong(music);
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
function previousSong(data) {
  previousButton.addEventListener('click', () => {
    playButton.src = '../img/stop-button.png';
    musicController--;
    if (musicController < 0) {
      musicController = data.length - 1;
    }
    console.log('next', data[musicController].audio);
    song(data[musicController].audio);
  })
}


function PlaySong(song) {
  playButton.addEventListener('click', (e) => {
    songCreation(song)
    if (e.target.classList.contains('active')) {
      playButton.src = '../img/play-button.png';
      song.pause();
    } else {
      playButton.src = '../img/stop-button.png';
      song.play();
    }
    e.target.classList.toggle('active');
  })
}

function nextSong(data) {
  nextButton.addEventListener('click', () => {
    playButton.src = '../img/play-button.png';
    musicController++;
    if (musicController > data.length - 1) {
      musicController = 0;
    }
    console.log('next', data[musicController].audio);
    song(data[musicController].audio);
  })
}
