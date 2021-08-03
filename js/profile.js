import Musiclist from './modules/musiclist.js';
import Playlist from './modules/playlist.js';

const editName = document.querySelector('.js--editName');
const UserName = document.querySelector('.account__userName--name');

function changeNameDataBase(Username) {
  fetch('http://localhost:3000/user/name/6105b1566df8f20f5c99a4c1', {
    method: 'PUT',
    body: JSON.stringify(Username),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      UserName.innerHTML = data.data.name;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function saveName(name) {
  window.addEventListener('keydown', (event) => {
    name.style.borderBottom = 'none';
    if (event.keyCode === 13) {
      name.setAttribute('contenteditable', 'false');
      const currentUserName = {
        "name": `${name.innerHTML}`,
      };
      changeNameDataBase(currentUserName);
    }
  });
}

editName.addEventListener('click', () => {
  UserName.setAttribute('contenteditable', 'true');
  UserName.style.borderBottom = '1px solid white';
  saveName(UserName);
});

const musiclist = new Musiclist();
musiclist.getRecent();

window.onload = function () {
  const filters = document.getElementsByClassName('js--musicList');

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

const playlist = new Playlist();
playlist.getPlaylist();

function listSongs() {
  document.addEventListener('click', (event) => {
    const clicElement = ((event.target).parentNode);
    const id = clicElement.getAttribute('data-id');
    console.log(id);
    const list = document.getElementsByClassName('paintSongs');
    console.log(list[0])
  });
}

listSongs();
