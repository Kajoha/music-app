import LoadArtists from './modules/artists.js';
import User from './modules/userName.js';

const LastSongButton = document.querySelector('.lastSong__player--button img');
const userIdStorage = localStorage.getItem('UserId');;

function ActualUserName() {
  fetch(`https://kaju-music.herokuapp.com/user/${userIdStorage}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const actualUser = new User(data, null);
      actualUser.UserHomeName();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists').then((response) => response.json()).then((data) => {
  const load = new LoadArtists(data);
  load.addArtists();
});

ActualUserName();

