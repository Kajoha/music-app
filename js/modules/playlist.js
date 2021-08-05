import BuilderList from "./builderList.js";

export default class Playlist {
  songs = [];

  constructor() {
  }

  getSong(id) {
    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
      new BuilderList(song).createSong(true);
    })
  };

  getPlaylist(id) {
    fetch(`https://kaju-music.herokuapp.com/playlists/${id}`).then(response => response.json()).then(data => {
      const playlist = data.playlist;
      playlist.songs.forEach(id => {
        this.getSong(id);
      })
    })
  };

  getPlaylists() {
    fetch('https://kaju-music.herokuapp.com/playlists?userId=61045361ea616b0015b9ae86').then(response => response.json()).then(data => {
      const playlists = data.data;
      playlists.forEach(playlists => {
        new BuilderList(data).createTitle(playlists.name, playlists._id);
      });
    })
  };

  editePlaylist() { }
  deletePlaylist() { }

}
