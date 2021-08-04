import Musiclist from './modules/musiclist.js';
import User from './modules/UserName.js';

const getEspecificUser = localStorage.getItem('UserId');
const profile = document.querySelector('.js-account');

function changenameDom(){
  fetch(`http://localhost:3000/user/${getEspecificUser}`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    const userDom = new User(data,null);
    userDom.nameDOM();
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
  const changeNameOfUser = new User(currentUserName,getEspecificUser);
  changeNameOfUser.updateName();
}

profile.addEventListener('click', (e) => {
  if(e.target.classList.contains('js--editName')){
    const UserName = document.querySelector('.account__userName--name');
    if(!e.target.classList.contains('save')){
      e.target.innerHTML = 'Save name';
      UserName.setAttribute('contenteditable', 'true');
      UserName.style.borderBottom = '1px solid white';
    }
    else{
      UserName.style.borderBottom = 'none';
      e.target.innerHTML = 'Edit';
      saveName(UserName);
    }
    e.target.classList.toggle('save');
  }
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
changenameDom();