export default class User {
  constructor(data, getEspecificUser) {
    this.data = data;
    this.getEspecificUser = getEspecificUser;
  }

  updateName() {
    fetch(`https://kaju-music.herokuapp.com/user/name/${this.getEspecificUser}`, {
      method: 'PUT',
      body: JSON.stringify(this.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  nameDOM() {
    const profile = document.querySelector('.js-account');
    const accountInfo = document.createElement('h1');
    accountInfo.setAttribute('class', 'account__information');
    accountInfo.innerHTML = 'Account Information';
    profile.appendChild(accountInfo);
    const userName = document.createElement('div');
    userName.setAttribute('class', 'account__userName');
    profile.appendChild(userName);
    const accountUser = document.createElement('div');
    const name = document.createElement('p');
    name.setAttribute('class', 'account__userName--name');
    name.innerHTML = `${this.data.data.name}`;
    accountUser.appendChild(name);
    userName.appendChild(accountUser);
    const accountUserButton = document.createElement('div');
    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('class', 'account__userName--editName cursor js--editName');
    buttonEdit.innerHTML = 'Edit';
    accountUserButton.appendChild(buttonEdit);
    userName.appendChild(accountUserButton);
    const logOut = document.createElement('div');
    logOut.setAttribute('class', 'account__logOut');
    const logOutUser = document.createElement('p');
    logOutUser.innerHTML = 'Log Out';
    logOut.appendChild(logOutUser);
    profile.appendChild(logOut);
    const logOutRedirection = document.createElement('a');
    logOutRedirection.setAttribute('href', 'index.html');
    const logOutButton = document.createElement('img');
    logOutButton.setAttribute('src', './img/log-out.png');
    logOutButton.setAttribute('class', 'js--logoutButton')
    logOutRedirection.appendChild(logOutButton);
    logOut.appendChild(logOutRedirection);
  }

  UserHomeName() {
    const dataUserLogedIn = document.querySelector('.lastSong__user');
    const nameofTheUser = document.createElement('h2');
    nameofTheUser.setAttribute('class', 'lastSong__info--user');
    nameofTheUser.innerHTML = 'Welcome,';
    dataUserLogedIn.appendChild(nameofTheUser);
    const name = document.createElement('span');
    nameofTheUser.appendChild(name);
    name.innerHTML = ` ${this.data.data.name}`;
  }
}
