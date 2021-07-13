let canvas = document.getElementById("musicPlayerCanvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
const playButton = document.querySelector('.playButton')
let audio = new Audio(); // creates a new audio object that  i can use to attach the song 


function changeButtonStyle(e,song){
    if(e.classList.contains('active')){
        playButton.src = '../img/play-button.png';
        song.pause();
    }else{
        playButton.src = '../img/stop-button.png';
        song.play();
    }
    e.classList.toggle("active");
}


playButton.addEventListener('click',(e) => {
    let music = document.querySelector('.music');
    let stream = music.getAttribute('src');
    audio.crossOrigin = "anonymous";
    audio.src = stream;
    audio.load();
    changeButtonStyle(e.target,audio)
    songCreation()
})

function songCreation() {
    let context = new AudioContext();   // is like an interface who has an  audio-processing graph built from the  audio 
    let src = context.createMediaElementSource(audio); // is to create a new media with the audio 
    let analyser = context.createAnalyser(); // to expose audio time and frequency data and create data visualisations.
    analyser.connect(context.destination);  // lets you connect one of the node's outputs to a target // destination representing the final destination of all audio in the context example my speakers
    analyser.fftSize = 512; // an unsigned long value and represents the window size in samples  (mathStuff https://en.wikipedia.org/wiki/Fast_Fourier_transform) El tamaño de FFT define el número de bins usados ​​para dividir la ventana en tiras iguales o bins. Por lo tanto, un contenedor es una muestra de espectro y define la resolución de frecuencia de la ventana.
    src.connect(analyser);
    let dataArray = new Uint8Array(analyser.frequencyBinCount); // typed array represents an array of 8-bit unsigned integers
    let bufferLength = analyser.frequencyBinCount; // this generally equates to the number of data values you will have to play with for the visualization.
    let barWidth = (width / bufferLength) * 1.5;
    let barHeight;
    let x = 0;

    function songAnimation() {
        x=0;
        analyser.getByteFrequencyData(dataArray)
        ctx.fillStyle = "#2A2438";
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] + 150;
            let r = barHeight / 1.8 + ((i/bufferLength)) - 15;
            let g = 110 * (i/bufferLength);
            let b = 120 + i ;
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, height - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }
        requestAnimationFrame(songAnimation);
    }
    songAnimation()
};