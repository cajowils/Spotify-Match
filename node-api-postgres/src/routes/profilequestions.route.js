const express = require('express');
const router = express.Router();
const profilequestions = require('../controllers/profilequestions.controller');

/* GET profile questions. */
router.get('/', profilequestions.getAll);

module.exports = router;