import Api from './modules/api.js';

const api = new Api();
api.getRecents();

//const api = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead';
//const apiMusicapp = 'http://localhost:3000';

/* const radioHead = new RadioHead({
  id: 'rad001',
  name: 'Weird fishes',
  album: 'In rainbows',
  image: 'https://cetav.s3.us-east-2.amazonaws.com/inrainbows.jpeg',
  audio: 'https://cetav.s3.us-east-2.amazonaws.com/weird-fishes.mp3',
});
console.log(radioHead); */

/* function apiRadioHead() {
  fetch(api).then((response) => response.json()).then((data) => {
    console.log(data);
  });
}

function userPlaylists() {
  fetch(`${apiMusicapp}/playlists`).then((response) => response.json()).then((data) => {
    console.log(data);
  });
}

function userFavourite() {
  fetch(`${apiMusicapp}/favourite`).then((response) => response.json()).then((data) => {
    console.log(data);
  });
}

function userRecent() {
  fetch(`${apiMusicapp}/recent`).then((response) => response.json()).then((data) => {
    const recents = data.data.songs;
    console.log(recents);
  });
}

window.onload = function () {
  // apiRadioHead();
  //userPlaylists();
  //userFavourite();
  //userRecent();
}; */
