import BuilderList from './builderList.js';

export default class Musiclist {
  songs = [];

  constructor(userid) {
    this.userId = userid;
  }

  getRecent() {
    fetch(`https://kaju-music.herokuapp.com/recent?userId=${this.userId}`).then(response => response.json()).then(data => {
      const recents = data.data;
      recents.forEach(id => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
          new BuilderList(song).createSong(false, false);
        })
      })
    });
  };

  getFavorites() {
    fetch(`https://kaju-music.herokuapp.com/favorite?userId=${this.userId}`).then(response => response.json()).then(data => {
      const recents = data.data;
      recents.forEach(id => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
          new BuilderList(song).createSong(false, true);
        })
      });
    })
  };

  getArtist(idArtist) {

    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/${idArtist}`).then((response) => response.json()).then((data) => {
      const artist = data;
      artist.forEach(song => {
        new BuilderList(song).createSong(false, false);
      });
    });
  };

}

