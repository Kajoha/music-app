import { loadArtists } from "./home.js";

const LastSongButton = document.querySelector('.lastSong__player--button img');
const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

function lastSong(ActualSong){
    LastSongButton.dataset.audio = ActualSong.audio;
}

fetch(apiArtists).then((response) => response.json()).then((data) => {
    loadArtists(data);
});