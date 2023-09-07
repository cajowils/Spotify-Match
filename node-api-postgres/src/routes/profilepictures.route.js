const express = require('express');
const router = express.Router();
const profilepictures = require('../controllers/profilepictures.controller');

/* GET profile pictures. */
router.get('/:id', profilepictures.get);
  
/* POST profile pictures */
router.post('/', profilepictures.create);

/* PUT profile pictures */
router.put('/:id', profilepictures.update);

/* DELETE profile pictures */
router.delete('/:id', profilepictures.remove);

module.exports = router;