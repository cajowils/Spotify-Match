const db = require('./db.service');

async function getData(id) {
  const data = await db.query(
  'SELECT acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence FROM spotifydata WHERE id = $1', [id]
  );
  return data[0];
}

async function postData(data) {
  try {
    const result = await db.query(
      'INSERT INTO spotifydata (id, acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [data.id, data.acousticness, data.danceability, data.energy, data.instrumentalness, data.liveness, data.speechiness, data.valence]
    );
    return 'Spotify Data created successfully';
  } catch (err) {
      console.error(err);
    throw new Error('Failed to create Spotify Data');
  }
}

async function getTopArtists(id) {
  const topArtists = await db.query(
    'SELECT artistid, artistname, rank FROM topartists WHERE userid = $1 ORDER BY rank ASC', [id]
    );
  return topArtists;
}

async function postTopArtists(id, body) {
  console.log(body);
  try {
    for (let i = 0; i < body.data.length; i+=1) {
      let artist = await body.data[i];
      const result = await db.query(
        'INSERT INTO topartists (userid, artistid, artistname, rank) VALUES ($1, $2, $3, $4)',
        [id, artist.artistid, artist.artistname, artist.rank]
      );
    }
    return 'Top Artists created successfully';
  } catch (err) {
      console.error(err);
    throw new Error('Failed to create Top Artists');
  }
}

async function getTopTracks(id) {
    const topTracks = await db.query(
      'SELECT trackid, trackname, rank FROM toptracks WHERE userid = $1 ORDER BY rank ASC', [id]
      );
    return topTracks;
}

async function postTopTracks(id, body) {
  console.log(body);
  try {
    for (let i = 0; i < body.data.length; i+=1) {
      let track = await body.data[i];
      const result = await db.query(
        'INSERT INTO toptracks (userid, trackid, trackname, rank) VALUES ($1, $2, $3, $4)',
        [id, track.trackid, track.trackname, track.rank]
      );
    }
    return 'Top Tracks created successfully';
  } catch (err) {
      console.error(err);
    throw new Error('Failed to create Top Tracks');
  }
}

async function getTopGenres(id) {
  const topGenres = await db.query(
    'SELECT genre, rank FROM topgenres WHERE userid = $1 ORDER BY rank ASC', [id]
    );
  return topGenres;
}

async function postTopGenres(id, body) {
  console.log(body);
  try {
    for (let i = 0; i < body.data.length; i+=1) {
      let genre = await body.data[i];
      const result = await db.query(
        'INSERT INTO topgenres (userid, genre, rank) VALUES ($1, $2, $3)',
        [id, genre.genre, genre.rank]
      );
    }
    return 'Top Genres created successfully';
  } catch (err) {
      console.error(err);
    throw new Error('Failed to create Top Genres');
  }
}

module.exports = {
  getData,
  postData,
  getTopArtists,
  postTopArtists,
  getTopTracks,
  postTopTracks,
  getTopGenres,
  postTopGenres,
}