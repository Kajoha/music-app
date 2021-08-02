export default class BuilderSong {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.album = data.album;
    this.image = data.image;
    this.audio = data.audio;
  }

  createSong(isPlaylist) {
    let paintPlaylist = '';
    const divPlaylist = document.querySelector('.js--playlist');
    paintPlaylist = `
    <li data-id="${this.id}" class="musicList__item">
      <img class="musicList__img" src="${this.image}" alt="">
      <p>${this.name}</p>
      <p>${this.album}</p>
      <button class="musicList__play js--play"><img class="musicList__play--img" data-audio = "${this.audio}" src="./img/play-button.png" alt=""></button>
      <button class="musicList__play js--play">like</button>
      ${isPlaylist ? `<button class="musicList__play js--play">delete</button>` : ""}
      </li>
      `;
    divPlaylist.innerHTML += paintPlaylist;
  }

  playSong() { }

  addFavorite() { }

  removeFavorite() { }

  addToPlaylist() { }

  removePlaylist() { }
}