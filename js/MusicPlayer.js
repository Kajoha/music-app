import SongPlayer from "./modules/SongPlayer.js";
let canvas = document.getElementById("musicPlayerCanvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let music = document.querySelector('.music');
let playButton = document.querySelector('.playButton')

function songs(data){
	music.src = data;
	music.load();
}

function start(song){
	playButton.addEventListener('click', (e) => {
		if(e.target.classList.contains('active')){
			playButton.src = '../img/play-button.png';
			song.pause();
		}else{
			playButton.src = '../img/stop-button.png';
			song.play();
		}
		e.target.classList.toggle('active');
	})
}

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
		const SongsList = new SongPlayer(data);
		SongsList.previous();
		SongsList.next();
		for(let i = 0; i < data.length; i++){
			let currentSong = data[i].audio;
			songs(currentSong);
			start(music);
		}
	})
	.catch((error) => {
	console.log("error", error);
	});


function songCreation(audio) { /* Just works in modzilla */
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
			x= 0;
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
