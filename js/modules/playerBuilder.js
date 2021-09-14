export default class MusicPlayer {
  constructor() { }

  controllers() {
    let paintControllers = '';
    const divControllers = document.querySelector('.musicPlayer__controls');
    paintControllers = `
        <audio autoplay class="music" type="audio/mp3" crossOrigin="anonymous"></audio>
        <p class="music__player--title">Playing <span>Music Name</span></p>
        <button class="button__addPlaylist ">
          <img class="img__cursor addPlaylist js--addPlaylist" src="./img/add-playlist.png" alt="add-playlist-button">
        </button>
        <button class="button__previousSong ">
          <img class=" img__cursor previousButton" src="./img/left-arrow.png" alt="previous-song-button">
        </button>
        <button class="button__playSong">
          <img class="img__cursor playButton" src="./img/stop-button.png" alt="play-button">
        </button>
        <button class="button__nextSong ">
          <img class=" img__cursor nextButton" src="./img/right-arrow.png" alt="next-song-button">
        </button>
        <button class="button__favoriteSong ">
          <img class=" img__cursor hearthButton" src="./img/hearth.png" alt="favorite-song-buton">
        </button>
        `;
    divControllers.innerHTML = paintControllers;
  }

  addingPlaylists() {
    let paintModal = '';
    const divModal = document.querySelector('.js--modal');
    paintModal = `
        <div class="modal__content">
        <h2 class="modal__content--title">Add to a list</h2>
        <div class="modal__content--newPlaylist">
          <input type="text" name="newPlaylist" placeholder="New Playlist">
          <button type="submit">Create</button>
        </div>
        <div class="modal__content--playlistContent">
          <h2>Exisiting Playlists</h2>
          <div class="modal__content--playlistsAvailables">
            <div class="modal__content--playlist">
              <p>Salsa Favorites</p>
            </div>
            <div class="modal__content--playlist">
              <p>Bachata Favorites</p>
            </div>
            <div class="modal__content--playlist">
              <p>Reggue Favorites</p>
            </div>
          </div>
        </div>
      </div>
      `;
    divModal.innerHTML = paintModal;
  }
}
