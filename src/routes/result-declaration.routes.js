const express = require('express');
const router = express.Router();

const ResultDeclarationController = require('../controllers/resultDeclaration.controller');

router.post('/create', ResultDeclarationController.create);

router.get('/all/:userId', ResultDeclarationController.findAllByUserId);

module.exports = router;
