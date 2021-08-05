import BuilderList from './builderList.js';

export default class Musiclist {
  songs = [];

  constructor() {
  }

  getSong(id) {
    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
      new BuilderList(song).createSong(false);
    })
  }

  getRecent() {
    fetch('https://kaju-music.herokuapp.com/recent?userId=61045361ea616b0015b9ae86').then(response => response.json()).then(data => {
      const recents = data.data;
      recents.forEach(id => {
        this.getSong(id);
      })
    });
  };

  getFavorites() {
    fetch('https://kaju-music.herokuapp.com/favorite?userId=61045361ea616b0015b9ae86').then(response => response.json()).then(data => {
      const recents = data.data;
      recents.forEach(id => {
        this.getSong(id);
      });
    })
  };

  getArtist(idArtist) {

    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/${idArtist}`).then((response) => response.json()).then((data) => {
      const artist = data;
      artist.forEach(song => {
        new BuilderList(song).createSong(false);
      });
    });
  };

}

