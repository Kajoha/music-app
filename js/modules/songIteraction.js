export default class Interaction {
  songs = '';

  constructor(userid) {
    this.userId = userid;
  }

  addRecent(song) {
    const saveRecent = { 'userId': `${this.userId}`, 'songs': [`${song}`] };

    fetch('https://kaju-music.herokuapp.com/recent', {
      method: 'PUT',
      body: JSON.stringify(saveRecent),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json());
  }

  addFavorite(song) {
    const saveFavorite = { 'userId': `${this.userId}`, 'songs': [`${song}`] };

    fetch('https://kaju-music.herokuapp.com/favorite', {
      method: 'PUT',
      body: JSON.stringify(saveFavorite),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json());
  }

  removeFavorite(song) {
    fetch(`https://kaju-music.herokuapp.com/favorite/${this.userId}/song/${song}`, { method: 'DELETE' }).then((response) => response.json());
  }

  addSongPlaylist(idPlaylist, song) {
    const addSong = { 'id': `${idPlaylist}`, 'songs': `${song}` };

    fetch('https://kaju-music.herokuapp.com/playlists', {
      method: 'PUT',
      body: JSON.stringify(addSong),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json());
  }

  removeSongPlaylist(idPlaylist, song) {
    fetch(`https://kaju-music.herokuapp.com/playlists/${idPlaylist}/song/${song}`, { method: 'DELETE' }).then((response) => response.json());
  }
}
