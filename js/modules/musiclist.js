import BuilderSong from "./song.js";

export default class Musiclist {
  songs = [];

  constructor() {
    this.getRecent()
  }

  getRecent() {
    fetch('http://localhost:3000/recent?userId=60ee40f864a5f71095c09d80').then(response => response.json()).then(data => {
      const recents = data.data.songs;
      recents.forEach(song => {
        new BuilderSong(song).createSong(false);
      });
    })
  }

  getFavorites() {
    fetch('http://localhost:3000/favorite?userId=60ee40f864a5f71095c09d80').then(response => response.json()).then(data => {
      const recents = data.data.songs;
      recents.forEach(song => {
        new BuilderSong(song).createSong(false);
      });
    })
  }

  getArtist(idArtist) { }

}
