const express = require('express');
const router = express.Router();

const ResultDeclarationController = require('../controllers/resultDeclaration.controller');

router.post('/create', ResultDeclarationController.create);

router.get(
	'/all/:user_phone_number',
	ResultDeclarationController.findAllByUserPhoneNumber
);

module.exports = router;
