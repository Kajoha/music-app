import Musiclist from './modules/musiclist.js';

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
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      UserName.innerHTML = data.data.name;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function saveName(name) {
  name.style.borderBottom = 'none';
  name.setAttribute('contenteditable', 'false');
  const currentUserName = {
    "name": `${name.innerHTML}`,
  };
  changeNameDataBase(currentUserName);
}

editName.addEventListener('click', () => {
  if(!editName.classList.contains('save')){
    editName.innerHTML = 'Save name';
    UserName.setAttribute('contenteditable', 'true');
    UserName.style.borderBottom = '1px solid white';
  }
  else{
    UserName.style.borderBottom = 'none';
    editName.innerHTML = 'Edit';
    saveName(UserName);
  }
  editName.classList.toggle('save');
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
