// import BuilderSong from "./song";

export default class Playlist {
  songs = [];

  constructor() {
  }

  setTitle(title, id) {
    let paintTitle = '';
    const divTilte = document.querySelector('.js--title');
    paintTitle = ` <li data-id="${id}" class="musicList__item"><h3 id="favorites" class="cursor">${title}</h3>
    <button class="musicList__items--play musicList__items js--play cursor"><img class="musicList__play--img" src="./img/play-button.png" alt=""></button>
    <button class="musicList__items playlist__items--edit cursor js--play">edit</button>
    <button class="musicList__items cursor js--play playlist__items--delete" data-id="${id}">delete</button>
    </li>
    <div><ul class="paintSongs"></ul></div>`;
    divTilte.innerHTML += paintTitle;
  };

  getSong(id) {
    fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${id}`).then(response => response.json()).then(song => {
      new BuilderSong(song).createSong(true);
    })
  };

  getPlaylist() {
    fetch('https://kaju-music.herokuapp.com/playlists?userId=61045361ea616b0015b9ae86').then(response => response.json()).then(data => {
      const playlists = data.data;
      playlists.forEach(playlists => {
        console.log(playlists._id)
        this.setTitle(playlists.name, playlists._id);
        console.log(playlists.songs)
      });
    })
  };

  editePlaylist() { }
  deletePlaylist() { }

}
