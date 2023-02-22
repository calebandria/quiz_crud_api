const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question.controller.js');

//create a new question

router.post('/', questionController.create);

module.exports = router;