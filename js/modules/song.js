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
      <p class="musicList__text">${this.name}</p>
      <spam class="musicList__text musicList__text--album">Album: ${this.album}</spam>
      <button class="musicList__items--play musicList__items js--play cursor"><img class="musicList__play--img" data-audio = "${this.audio}" src="./img/play-button.png" alt=""></button>
      <button class="musicList__items--like musicList__items js--play cursor"><img src="./img/hearth.png" alt=""></button>
      ${isPlaylist ? '<button class="musicList__play cursor js--play">delete</button>' : ''}
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
