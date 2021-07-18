const mongoose = require('mongoose');
const Playlist = require('../models/playlist.model');
const Song = require('../models/song.model');

const playlistService = {};

playlistService.createPlaylist = async function ({ name, songs }) {
  try {
    if (!songs) songs = [];
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80');
    const playlist = new Playlist({ userId, name, songs });
    const newPlaylist = await playlist.save();
    return newPlaylist;
  } catch (error) {
    throw new Error('Error while save playlist');
  }
};

playlistService.getPlaylist = async function () {
  try {
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80'); // Aqui poner el id del usuario logueado
    const playlists = await Playlist.find({ userId }).populate('songs');
    return playlists;
  } catch (error) {
    throw new Error(error.message);
  }
};

playlistService.updatePlaylist = async function (data) {
  try {
    // const id = new mongoose.Types.ObjectId(data.id);
    const id = data.id;
    const playlist = await Playlist.findById(id);
    if (data.name) playlist.name = data.name;
    if (data.songs) playlist.songs = data.songs;
    await playlist.save();
    return playlist;
  } catch (error) {
    throw new Error('Error while save playlist');
  }
};

module.exports = playlistService;
