const profilequestions = require('../services/profilequestions.service');

async function getAll(req, res, next) {
  try {
      res.json(await profilequestions.getQuestions());
  } catch (err) {
      console.error(`Error while getting Questions`, err.message);
      next(err);
  }
}

module.exports = {
    getAll
  };