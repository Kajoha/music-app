const playlistService = require('../services/playlist.service');

const playlistController = {};

playlistController.create = async function (req, res, next) {
  try {
    const newPlaylist = await playlistService.createPlaylist(req.body);
    return res.status(201).json({ newPlaylist });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

playlistController.getPlaylist = async function (req, res, next) {
  try {
    const playlists = await playlistService.getPlaylist();
    return res.status(200).json({ status: 200, data: playlists, message: 'Successfully play list retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

playlistController.update = async function (req, res, next) {
  try {
    const playlist = await playlistService.updatePlaylist(req.body);
    return res.status(201).json({ playlist });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

module.exports = playlistController;
