export default class LoadArtists {
  constructor(data) {
    this.data = data;
  }

  addArtists(isInArtist) {
    const divContent = document.querySelector('.js--artists');
    const apiData = this.data;
    let artists = '';

    for (let i = 0; i < apiData.length; i += 1) {
      artists += `
      <div class="artists__home">
      <img class="artists__home--img" src="${apiData[i].image}" alt="">
      <h3 data-id="${apiData[i].id}" ${isInArtist ? 'class="artists__inArtist cursor"' : 'class="artists__home--name cursor"'} ><a href="./artist.html">${apiData[i].name}</a></h3>
      </div>
      `;
    }
    divContent.innerHTML = artists;
  }
}
