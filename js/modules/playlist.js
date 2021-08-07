import BuilderList from "./builderList.js";

export default class Playlist {
  songs = [];

  constructor(userid) {
    this.userId = userid;
  }

  getSong(id) {
    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
      new BuilderList(song).createSong(true, false);
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
    fetch(`https://kaju-music.herokuapp.com/playlists?userId=${this.userId}`).then(response => response.json()).then(data => {
      const playlists = data.data;
      playlists.forEach(playlists => {
        new BuilderList(data).createTitle(playlists.name, playlists._id);
      });
    })
  };

  createPlaylist(song, name) {
    const editePlaylist = { 'userId': `${this.userId}`, 'songs': `${song}`, 'name': `${name}` };

    fetch('https://kaju-music.herokuapp.com/playlists', {
      method: 'PUT',
      body: JSON.stringify(editePlaylist),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
  }


  editePlaylist(id, name, song) {
    const editePlaylist = { 'id': `${id}`, 'name': `${name}`, 'songs': `${song}` };

    fetch('https://kaju-music.herokuapp.com/playlists', {
      method: 'PUT',
      body: JSON.stringify(editePlaylist),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
  }

  deletePlaylist(id) {
    fetch(`https://kaju-music.herokuapp.com/playlists/${id}`, { method: 'DELETE' }).then((response) => response.json())
  }


}
