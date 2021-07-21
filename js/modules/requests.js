const apiMusicapp = 'http://localhost:3000';
const api = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead';

fetch(api).then((response) => response.json()).then((data) => {
  console.log(data);
});

fetch(`${apiMusicapp}/favourite`).then((response) => response.json()).then((data) => {
  console.log(data);
});

fetch(`${apiMusicapp}/recent`).then((response) => response.json()).then((data) => {
  console.log(data);
});

fetch(`${apiMusicapp}/playlists`).then((response) => response.json()).then((data) => {
  console.log(data);
});
