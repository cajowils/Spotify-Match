const db = require('./db.service');

async function getMatches(id) {
  const matches = await db.query(
  `SELECT i1.swipeeid AS id, u.name, p.picture1
  FROM interest i1, users u, profilepictures p
  WHERE i1.swipeeid IN (SELECT i2.swiperid
                  FROM interest i2
                  WHERE i1.swiperid = i2.swipeeid
                  AND i2.liked = TRUE)
  AND i1.liked = TRUE
  AND i1.swipeeid = u.id
  AND p.id = u.id
  AND i1.swiperid = $1`, [id]
  );
  return matches;
}

async function postInterest(swipe) {
  try {
    const result = await db.query(
      'INSERT INTO interest(swiperid, swipeeid, liked) VALUES ($1, $2, $3)',
      [swipe.swiperid, swipe.swipeeid, swipe.liked]
    );
    return 'Interests updated successfully';
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update interests');
  }
}

async function deleteMatch(swipe) {
  try {
    const result = await db.query(
      'UPDATE interest SET liked = FALSE WHERE liked = TRUE AND swiperid = $1 AND swipeeid = $2', [swipe.swiperid, swipe.swipeeid]
    );
    return 'Match deleted successfully';
  } catch (err) {
    console.error(err);
    throw new Error('Failed to delete match');
  }
}

module.exports = {
  getMatches,
  postInterest,
  deleteMatch
}