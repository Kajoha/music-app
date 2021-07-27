export default class Requests {

  apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
  apiRadioHead = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead';
  apiAurora = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/aurora';
  apiGozillaz = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/gorillaz';


  artist() {
    fetch(this.apiArtists).then((response) => response.json()).then((data) => {
      const artist = data;
      return artist;
    });
  }

  radioHead() {
    fetch(this.apiRadioHead).then((response) => response.json()).then((data) => {
      const radioHead = data;
      return radioHead;
    });
  }

  aurora() {
    fetch(this.apiAurora).then((response) => response.json()).then((data) => {
      const aurora = data;
      return aurora;
    });
  }

  gozillaz() {
    fetch(this.apiGozillaz).then((response) => response.json()).then((data) => {
      const gozillaz = data;
      return gozillaz;
    });
  }
};

requests();


/*
// const apiMusicapp = 'http://localhost:3000';

fetch(`${apiMusicapp}/favourite`).then((response) => response.json()).then((data) => {
 console.log(data);
});

fetch(`${apiMusicapp}/recent`).then((response) => response.json()).then((data) => {
 console.log(data);
});

fetch(`${apiMusicapp}/playlists`).then((response) => response.json()).then((data) => {
 console.log(data);
});
*/
