const LastSongButton = document.querySelector('.lastSong__player--button img');
function lastSong(ActualSong){
    LastSongButton.dataset.audio = ActualSong.audio;
}