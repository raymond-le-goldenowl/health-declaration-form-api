const express = require('express');
const router = express.Router();

const validation = require('../validation/auth.validation');
const UserController = require('../controllers/user.controller');

router.post('/save', UserController.save);

router.post('/request-save', UserController.requestSave);

router.get('/current', UserController.currentByPhoneNumber);

module.exports = router;
