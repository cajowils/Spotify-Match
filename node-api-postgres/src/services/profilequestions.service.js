const db = require('./db.service');

async function getQuestions() {
  const rows = await db.query(
  'SELECT * FROM profilequestions ORDER BY questionid ASC'
  );
  return rows;
}

module.exports = {
  getQuestions
}