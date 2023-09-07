const db = require('./db.service');

async function getHome(id) {
  const home = await db.query(
  `SELECT u.id, u.name
  FROM users u
  WHERE u.id != '${id}'
    AND u.id NOT IN (SELECT swipeeid
                  FROM interest
                  WHERE swiperid = '${id}');`
  );
  return home;
}

module.exports = {
  getHome,
}