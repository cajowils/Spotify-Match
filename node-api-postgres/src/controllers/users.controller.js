const users = require('../services/users.service');

async function getAll(req, res, next) {
  try {
      res.json(await users.getUsers());
  } catch (err) {
      console.error(`Error while getting users`, err.message);
      next(err);
  }
}

async function get(req, res, next) {
  try {
      res.json(await users.getUserById(req.params.id));
  } catch (err) {
      console.error(`Error while getting user`, err.message);
      next(err);
  }
}

async function exists(req, res, next) {
  try {
      res.json(await users.userExists(req.params.id));
  } catch (err) {
      console.error(`Error while getting user`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await users.createUserById(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await users.updateUser(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await users.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
}

module.exports = {
  getAll,
  get,
  exists,
  create,
  update,
  remove
};