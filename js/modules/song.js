playSong() { }

addFavorite(userId) {
  const saveFavorite = { 'userId': `${userId}`, 'songs': [this.id], };

  fetch('https://kaju-music.herokuapp.com/favorite', {
    method: 'PUT',
    body: JSON.stringify(saveFavorite),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

removeFavorite(userId) {
  const removeFavorite = { 'userId': `${userId}`, 'songs': [this.id], };

  fetch('https://kaju-music.herokuapp.com/favorite', {
    method: 'DELETE',
    body: JSON.stringify(removeFavorite),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

addToPlaylist(idPlaylist) {
  const addSong = { 'id': `${idPlaylist}`, 'songs': [this.id], };

  fetch('https://kaju-music.herokuapp.com/playlists', {
    method: 'PUT',
    body: JSON.stringify(addSong),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

removePlaylist(idPlaylist) {
  const remove = { 'id': `${idPlaylist}`, 'songs': [this.id], };

  fetch('https://kaju-music.herokuapp.com/playlists', {
    method: 'DELETE',
    body: JSON.stringify(remove),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
