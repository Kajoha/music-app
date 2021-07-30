import Musiclist from './modules/musiclist.js';

const musiclist = new Musiclist();
window.onload = function () {
  const filters = document.getElementsByClassName('js-playlists');

  Array.from(filters).forEach((element) => {
    element.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      document.querySelector('.js--playlist').innerHTML = '';
      switch (filter) {
        case 'recently':
          musiclist.getRecent();
          break;
        case 'favorites':
          musiclist.getFavorites();
          break;
        default:
          break;
      }
    });
  });
};
