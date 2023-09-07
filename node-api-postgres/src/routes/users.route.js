const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

/* GET all users. */
router.get('/', users.getAll);

/* GET user. */
router.get('/:id', users.get);

/* Check whether a user exists. */
router.get('/exists/:id', users.exists);
  
/* POST user */
router.post('/', users.create);

/* PUT user */
router.put('/:id', users.update);

/* DELETE user */
router.delete('/:id', users.remove);

module.exports = router;