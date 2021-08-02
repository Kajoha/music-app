import LoadArtists from './modules/artists.js';

const LastSongButton = document.querySelector('.lastSong__player--button img');

fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists').then((response) => response.json()).then((data) => {
    const load = new LoadArtists(data);
    load.addArtists();
});


function lastSong(ActualSong){
    LastSongButton.dataset.audio = ActualSong.audio;
}

lastSong();