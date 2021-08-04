export default class User {
  constructor(data,getEspecificUser) {
    this.data = data;
    this.getEspecificUser = getEspecificUser;
  }

  updateName() {
    fetch(`http://localhost:3000/user/name/${this.getEspecificUser}`, {
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
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  nameDOM() { 
    const profile = document.querySelector('.js-account');
    const accountInfo = document.createElement('h1');
    accountInfo.setAttribute('class','account__information');
    accountInfo.innerHTML = 'Account Information';
    profile.appendChild(accountInfo);
    const userName = document.createElement('div');
    userName.setAttribute('class','account__userName');
    profile.appendChild(userName);
    const accountUser = document.createElement('div');
    const name = document.createElement('p');
    name.setAttribute('class','account__userName--name');
    name.innerHTML = `${this.data.data.name}`;
    accountUser.appendChild(name);
    userName.appendChild(accountUser);
    const accountUserButton = document.createElement('div');
    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('class','account__userName--editName cursor js--editName');
    buttonEdit.innerHTML = 'Edit';
    accountUserButton.appendChild(buttonEdit);
    userName.appendChild(accountUserButton);
  }

  UserHomeName(){
    const dataUserLogedIn = document.querySelector('.lastSong__info');
    const nameofTheUser = document.createElement('h2');
    nameofTheUser.setAttribute('class','lastSong__info--user');
    nameofTheUser.innerHTML = 'Welcome,';
    dataUserLogedIn.appendChild(nameofTheUser);
    const name = document.createElement('span');
    nameofTheUser.appendChild(name);
    name.innerHTML = ` ${this.data.data.name}`;
  }
}
