const spotifydata = require('../services/spotifydata.service');

async function get(req, res, next) {
  try {
      res.json(await spotifydata.getData(req.params.id));
  } catch (err) {
      console.error(`Error while getting spotify data`, err.message);
      next(err);
  }
}

async function post(req, res, next) {
  try {
    res.json(await spotifydata.postData(req.body));
  } catch (err) {
    console.error(`Error while posting spotify data`, err.message);
    next(err);
  }
}

async function postTopArtists(req, res, next) {
  try {
    res.json(await spotifydata.postTopArtists(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while posting top artists`, err.message);
    next(err);
  }
}

async function postTopTracks(req, res, next) {
  try {
    res.json(await spotifydata.postTopTracks(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while posting top tracks`, err.message);
    next(err);
  }
}

async function postTopGenres(req, res, next) {
  try {
    res.json(await spotifydata.postTopGenres(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while posting top genres`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  post,
  postTopArtists,
  postTopTracks,
  postTopGenres,
};