const users = require('../services/profilepictures.service');

async function get(req, res, next) {
  try {
      res.json(await users.getProfilePicturesById(req.params.id));
  } catch (err) {
      console.error(`Error while getting profile pictures`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await users.createProfilePictures(req.body));
  } catch (err) {
    console.error(`Error while creating profile pictures`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await users.updateProfilePictures(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating profile pictures`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await users.deleteProfilePictures(req.params.id));
  } catch (err) {
    console.error(`Error while deleting profile pictures`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};