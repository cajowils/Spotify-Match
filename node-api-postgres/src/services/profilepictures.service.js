const db = require('./db.service');

async function getProfilePicturesById(id) {
  const pictures = await db.query(
  'SELECT picture1, picture2, picture3, picture4 FROM profilepictures WHERE id = $1', [id]
  );
  return pictures[0];
}

async function createProfilePictures(user) {
  const result = await db.query(
  'INSERT INTO profilepictures (id, picture1, picture2, picture3, picture4) VALUES ($1, $2, $3, $4, $5)',
  [user.id, user.picture1, user.picture2, user.picture3, user.picture4]
  );
  return 'Profile pictures created successfully';
}

async function updateProfilePictures(id, user) {
  console.log("update picture:");
  console.log(user.picture1);
  try {
    const result = await db.query(
      'UPDATE profilepictures SET picture1 = $2, picture2 = $3, picture3 = $4, picture4 = $5 WHERE id = $1',
      [user.id, user.picture1, user.picture2, user.picture3, user.picture4]
    );
    return 'Profile pictures updated successfully';
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update profile pictures');
  }
}

async function deleteProfilePictures(id) {
  const result = await db.query(
  'DELETE FROM profilepictures WHERE id = $1', [id]
  );
  return 'Profile pictures deleted successfully';
}

module.exports = {
  getProfilePicturesById,
  createProfilePictures,
  updateProfilePictures,
  deleteProfilePictures,
}