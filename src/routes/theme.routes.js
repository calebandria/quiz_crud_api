const express = require('express');
const router = express.Router();

const themeController = require('../controllers/theme.controller');

router.post('/theme/post', themeController.create);
router.get('/theme/get',themeController.findAll);


module.exports = router;