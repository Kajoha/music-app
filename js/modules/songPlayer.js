export default class SongPlayer{
    constructor(data){
        this.currentSong = data.songs;
    }
    songs(){
        for(let i =0; i<this.currentSong.length; i+=1){
            let currentAudio = song.audio;
            return currentAudio;
        }
    }
}
















function song(data){
	music.src = data;
	music.crossOrigin = "anonymous";
	music.load();
	PlaySong(music);
}


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

