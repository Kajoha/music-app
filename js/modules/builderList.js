export default class BuilderList {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.album = data.album;
    this.image = data.image;
    this.audio = data.audio;
  }

  createSong(isPlaylist) {
    let paintPlaylist = '';
    const divMusiclist = document.querySelector('.js--musiclist');
    const divPlaylist = document.querySelector('.js--playlist');
    paintPlaylist = `
    <li data-id="${this.id}" class="musicList__item">
      <img class="musicList__img" src="${this.image}" alt="">
      <p class="musicList__text musicList__p">${this.name}</p>
      <spam class="musicList__text musicList__text--album">Album: ${this.album}</spam>
      <button class="musicList__items--play musicList__items cursor"><img class="musicList__play--img js--listening " data-audio = "${this.audio}" data-name = "${this.name}" src="./img/play-button.png" alt=""></button>
      <button class="musicList__like--hearth cursor"></button>
      ${isPlaylist ? '<button class="musicList__play cursor ">delete</button>' : ''}
      </li>`;
    isPlaylist ? divPlaylist.innerHTML += paintPlaylist : divMusiclist.innerHTML += paintPlaylist;
  }

  createTitle(title, id) {
    let paintTitle = '';
    const divTilte = document.querySelector('.js--title');
    paintTitle = ` <li data-id="${id}" class="musicList__item"><h3 id="favorites" class="cursor">${title}</h3>
      <button class="musicList__items--play musicList__items cursor"><img class="musicList__play--img" src="./img/play-button.png" alt=""></button>
      <button class="musicList__items playlist__items--edit cursor js--listening" id=${this.id}>edit</button>
      <button class="musicList__items cursor js--play playlist__items--delete" data-id="${id}">delete</button>
      </li>`;
    divTilte.innerHTML += paintTitle;
  }
}
