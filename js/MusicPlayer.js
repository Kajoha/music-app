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
			song(data[musicController].audio)
			previousSong(data);
			nextSong(data);
		})
		.catch((error) => {
		console.log("error", error);
		});
};

MusicApi()


function song(data){
	music.src = data;
	music.crossOrigin = "anonymous";
	music.load();
	PlaySong(music);
}

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

function previousSong(data){
	previousButton.addEventListener('click', () =>{
		playButton.src = '../img/stop-button.png';
		musicController--;
		if(musicController < 0){
			musicController = data.length - 1;
		}
		console.log('next',data[musicController].audio)
		song(data[musicController].audio);
	})
}


function PlaySong(song){
	playButton.addEventListener('click', (e) => {
		songCreation(song)
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

function nextSong(data){
	nextButton.addEventListener('click',() =>{
		playButton.src = '../img/play-button.png';
		musicController++;
		if(musicController > data.length - 1){
			musicController = 0;
		}
		console.log('next',data[musicController].audio)
		song(data[musicController].audio);
	})
}

