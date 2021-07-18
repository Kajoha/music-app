export default class Api {
  apiMusicapp = 'http://localhost:3000';
  api = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead';
  constructor() {

  }
  getRecents() {
    fetch(`${this.apiMusicapp}/recent`).then((response) => response.json()).then((data) => {
      const recents = data.data.songs;
      console.log(recents);
    });
  }
}
