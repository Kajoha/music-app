export default class RadioHead {
  dataMusic = {};
  constructor(dataMusic) {
    this.dataMusic = dataMusic;
  }
  getDataMusic() {
    return this.dataMusic;
  }
  setDataMusic(dataMusic) {
    this.dataMusic = dataMusic
  }
}
