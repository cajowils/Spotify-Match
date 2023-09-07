const db = require('./db.service');
const spotifydata = require('../services/spotifydata.service');
const profilepictures = require('../services/profilepictures.service');

async function getUsers() {
  const rows = await db.query(
  'SELECT * FROM users ORDER BY id ASC'
  );
  return rows;
}

async function getUserById(id) {
  const user = await db.query(
    'SELECT u.id, u.name, u.birthdate, u.email, u.gender, u.orientation, u.location, u.pronouns, u.bio, u.questionid1, u.questionid2, u.questionid3, u.answer1, u.answer2, u.answer3, u.instagram FROM users u WHERE u.id = $1', [id]
  );

  const pictures = await profilepictures.getProfilePicturesById(id);
  const data = await spotifydata.getData(id);

  if (user && user[0]) {
    user[0].profilepictures = pictures ? pictures : {};
    user[0].spotifydata = data ? data : {};
    user[0].topartists = await spotifydata.getTopArtists(id);
    user[0].toptracks = await spotifydata.getTopTracks(id);
    user[0].topgenres = await spotifydata.getTopGenres(id);
    return user[0]
  }
  return user;
}

async function userExists(id) {
  const user = await db.query(
    'SELECT id FROM users WHERE id = $1', [id]
  );
  return user.length == 0 ? false : true;
}

async function createUserById(user) {
  const result = await db.query(
  'INSERT INTO users (id, name, birthdate, email, gender, orientation, location, pronouns, bio, questionid1,  questionid2, questionid3, answer1, answer2, answer3, instagram) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
  [user.id, user.name, user.birthdate, user.email, user.gender, user.orientation, user.location, user.pronouns, user.bio, user.questionid1, user.questionid2, user.questionid3, user.answer1, user.answer2, user.answer3, user.instagram]
  );
  return 'User created successfully';
}

async function updateUser(id, user) {
  const result = await db.query(
  'UPDATE users SET name = $2, birthdate = $3, email = $4, gender = $5, orientation = $6, location = $7, pronouns = $8, bio = $9, questionid1 = $10,  questionid2 = $11, questionid3 = $12, answer1 = $13, answer2 = $14, answer3 = $15, instagram = $16 WHERE id = $1',
  [id, user.name, user.birthdate, user.email, user.gender, user.orientation, user.location, user.pronouns, user.bio, user.questionid1, user.questionid2, user.questionid3, user.answer1, user.answer2, user.answer3, user.instagram]
  );
  return 'User updated successfully';
}

async function deleteUser(id) {
  const result = await db.query(
  'DELETE FROM users WHERE id = $1', [id]
  );
  return 'User deleted successfully';
}

module.exports = {
  getUsers,
  getUserById,
  userExists,
  createUserById,
  updateUser,
  deleteUser,
}