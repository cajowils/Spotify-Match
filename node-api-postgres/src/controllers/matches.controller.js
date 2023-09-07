const matches = require('../services/matches.service');

async function get(req, res, next) {
  try {
      res.json(await matches.getMatches(req.params.id));
  } catch (err) {
      console.error(`Error while getting matches`, err.message);
      next(err);
  }
}

async function post(req, res, next) {
  try {
    res.json(await matches.postInterest(req.body));
  } catch (err) {
    console.error(`Error while posting interest`, err.message);
    next(err);
  }
}
// async function putInterest(req, res, next) {
//   try {
//     res.json(await matches.postInterest(req.body));
//   } catch (err) {
//     console.error(`Error while posting interest`, err.message);
//     next(err);
//   }
// }

async function put(req, res, next) {
  try {
    res.json(await matches.deleteMatch(req.body));
  } catch (err) {
    console.error(`Error while deleting match`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  post,
  // putInterest,
  put
};