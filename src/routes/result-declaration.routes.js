const express = require('express');
const router = express.Router();

const ResultDeclarationController = require('../controllers/resultDeclaration.controller');

router.post('/create', ResultDeclarationController.create);

router.get(
	'/all/:phone_number',
	ResultDeclarationController.findAllByPhoneNumber
);

module.exports = router;
