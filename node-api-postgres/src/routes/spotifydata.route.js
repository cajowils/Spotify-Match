const express = require('express');
const router = express.Router();
const spotifydata = require('../controllers/spotifydata.controller');

/* GET spotify data. */
router.get('/:id', spotifydata.get);

router.post('/', spotifydata.post);

router.post('/topartists/:id', spotifydata.postTopArtists);

router.post('/toptracks/:id', spotifydata.postTopTracks);

router.post('/topgenres/:id', spotifydata.postTopGenres);



module.exports = router;