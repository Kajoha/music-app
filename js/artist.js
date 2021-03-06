import LoadArtists from './modules/artists.js';
import Musiclist from './modules/musiclist.js';
import SongPlayer from './modules/songPlayer.js';
import MusicPlayer from './modules/playerBuilder.js';
import Interaction from './modules/songIteraction.js';

const userId = localStorage.getItem('UserId');
const nameArtist = localStorage.getItem('click');
const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

function dataArtist(artist) {
  let paintArtist = '';
  const divArtist = document.querySelector('.js--artist');
  paintArtist = `
    <div class="artist__img">
      <img src="${artist.image}" alt="">
    </div>
    <div class="artist__content">
      <h1>${artist.name}</h1>
        <p class="artist__description">${artist.description}</p>
    </div>`;
  divArtist.innerHTML = paintArtist;
}

fetch(apiArtists).then((response) => response.json()).then((data) => {
  const artist = data.filter((data) => data.id === nameArtist);
  artist.forEach((element) => {
    dataArtist(element);
  });
  const artists = data.filter((data) => data.id !== nameArtist);
  const loard = new LoadArtists(artists);
  loard.addArtists(true);
});

function savedLocalStorage() {
  document.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    const id = clicElement.getAttribute('data-id');
    localStorage.setItem('click', id);
  });
}

savedLocalStorage();

const interaction = new Interaction(userId);
const musicArtist = new Musiclist();
musicArtist.getArtist(nameArtist);

function hearthAnimation(currentSongOfList) {
  currentSongOfList.addEventListener('click', (e) => {
    if (e.target.classList.contains('musicList__like--hearth')) {
      e.target.classList.toggle('is-active');
    }
  });
}

window.onload = function () {
  const playButton = document.querySelector('.js--musiclist');
  hearthAnimation(playButton);
  playButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--listening')) {
      const audio = e.target.dataset.audio;
      const musiName = e.target.dataset.name;
      const song = e.target.dataset.id;
      const musicPlayer = new MusicPlayer();
      musicPlayer.controllers();
      const songPlayer = new SongPlayer();
      songPlayer.currentSong(audio, musiName);
      interaction.addRecent(song);
    }
    if (e.target.classList.contains('js--like')) {
      const song = e.target.dataset.id;
      interaction.addFavorite(song);
    }
  });
};
