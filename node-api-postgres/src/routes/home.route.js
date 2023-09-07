const express = require('express');
const router = express.Router();
const home = require('../controllers/home.controller');

/* GET home page. */
router.get('/:id', home.get);

module.exports = router;