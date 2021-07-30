import BuilderSong from "./song";

export default class Playlist {
  urlApi = '';
  songs = [];
  isPlayList = true

  constructor(name) {
    this.name = name;
    this.initialize()
  }

  initialize() {
    fetch(this.urlApi).then(data => this.songs = data.map(song => new BuilderSong(song).createSong(this.isPlayList)))

  }

  setTitle(title) {
    this.title = title;
    let paintTitle = '';
    const divTilte = document.querySelector('.js--title');
    paintTitle = `<h3 id="favorites" class="cursor">${this.title}</h3>`;
    divTilte.innerHTML = paintTitle;
  }

  editePlaylist() { }
  deletePlaylist() { }

}
