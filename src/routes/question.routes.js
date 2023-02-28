const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question.controller.js');

//create a new question

router.post('/question/post', questionController.create);
router.delete('/question/:id/delete', questionController.delete);
router.put('/question/:id/put', questionController.update);
router.get('/question/:id/get',questionController.find);
router.get('/question/get', questionController.findAll);

module.exports = router;