const home = require('../services/home.service');

async function get(req, res, next) {
  try {
      res.json(await home.getHome(req.params.id));
  } catch (err) {
      console.error(`Error while getting home page`, err.message);
      next(err);
  }
}

module.exports = {
  get
};