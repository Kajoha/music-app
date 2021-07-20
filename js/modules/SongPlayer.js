export default class SongPlayer{
    previousButton = document.querySelector('.previousButton')
    nextButton = document.querySelector('.nextButton')
    musicTitle = document.querySelector('.music__player--title span');
    musicController = 0;
    constructor(data){
        this.data = data;
    }
    previous(){
        this.previousButton.addEventListener('click', () =>{
            this.musicController-=1;
            if(this.musicController < 0){
                this.musicController = this.data.length - 1;
            }
            console.log(this.data[this.musicController].audio);
        })
    }
    next(){
        this.nextButton.addEventListener('click',() =>{
            this.musicController+=1;
            if(this.musicController > this.data.length - 1){
                this.musicController = 0;
            }
            console.log(this.data[this.musicController].audio);
        })
    }
}





/*

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

*/