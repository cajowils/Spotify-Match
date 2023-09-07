const express = require('express');
const router = express.Router();
const matches = require('../controllers/matches.controller');

/* GET home page. */
router.get('/:id', matches.get);

router.post('/', matches.post);
// router.put('/', matches.putInterest);

router.put('/', matches.put); 

module.exports = router;