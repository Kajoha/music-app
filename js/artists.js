const nameArtist = localStorage.getItem('click');
// const urlApi = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/${nameArtist}`;
const apiArtists = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

function dataArtist(artist) {
  let paintArtist = '';
  const divArtist = document.querySelector('.js--divArtist');
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
});

/*
fetch(urlApi).then((response) => response.json()).then((data) => {
  console.log(data);
});
*/
