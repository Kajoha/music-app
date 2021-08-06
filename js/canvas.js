const canvas = document.getElementById('musicPlayerCanvas');
const playButton = document.querySelector('.js--listening');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

playButton.addEventListener('click',() => {
  const actualSong = playButton.data.audio;
  songCreation(actualSong);
})

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
      x= 0;
      analyser.getByteFrequencyData(dataArray)
      ctx.fillStyle = '#180534'; 
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] - 150 ;
          let r = barHeight + 299 / 1.8 + ((i/bufferLength)) - 15;
          let g = 110 * (i/bufferLength);
          let b = 120 + i ;
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x + 2, height - barHeight, barWidth, barHeight - 1);
          x += barWidth + 1;
      }
      requestAnimationFrame(songAnimation);
  }
  songAnimation()
}



