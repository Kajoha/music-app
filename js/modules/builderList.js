export default class BuilderList {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.album = data.album;
    this.image = data.image;
    this.audio = data.audio;
  }

  createSong(isPlaylist, isFavorite) {
    let paintPlaylist = '';
    const divMusiclist = document.querySelector('.js--musiclist');
    const divPlaylist = document.querySelector('.js--playlist');
    paintPlaylist = `
    <li data-id="${this.id}" class="musicList__item">
      <img class="musicList__img" src="${this.image}" alt="">
      <p class="musicList__text">${this.name}</p>
      <spam class="musicList__text musicList__text--album">Album: ${this.album}</spam>
      <button class="musicList__items--play musicList__items cursor"><img class="musicList__play--img js--listening " data-audio = "${this.audio}" src="./img/play-button.png" alt=""></button>
      <button class="musicList__items--like musicList__items  cursor">${isFavorite ? `<img class=" cursor js--unlike" data-id="${this.id}" src="./img/hearth-red.png" alt="">` : `<img class="js--like" data-id="${this.id}" src="./img/hearth.png" alt="">`}</button>
      ${isPlaylist ? `<button class="musicList__items musicList__items--delete cursor js--play"><img class="musicList__play--img js--delete" data-id="${this.id}" src="./img/delete.png" alt=""></button>` : ''}
      </li > `;
    isPlaylist ? divPlaylist.innerHTML += paintPlaylist : divMusiclist.innerHTML += paintPlaylist;
  }

  createTitle(title, id) {
    let paintTitle = '';
    const divTilte = document.querySelector('.js--title');
    paintTitle = ` <li data-id="${id}" class="musicList__item" ><h3 class="js--songs cursor">${title}</h3>
        <button class="musicList__items--play musicList__items cursor"><img class="musicList__play--img" src="./img/play-button.png" alt=""></button>
        <button class="musicList__items playlist__items--edit cursor js--listening" id=${this.id}><img class="musicList__play--img" src="./img/edit.png" alt=""></button>
        <button class="musicList__items cursor js--play playlist__items--delete" data-id="${id}"><img class="musicList__play--img js--deleteList" src="./img/delete.png" alt=""></button>
        </li>`;
    divTilte.innerHTML += paintTitle;
  }
}
