import express from 'express';

const router = express.Router();

import ResultDeclarationController from '@/controllers/resultDeclaration.controller';

import resultDeclarationValidate from '@/validation/resultDeclaration.validation';
router.post(
	'/create',
	resultDeclarationValidate.createValidate,
	ResultDeclarationController.create
);

router.get(
	'/all/:user_phone_number',
	resultDeclarationValidate.findAllByUserPhoneNumberValidate,
	ResultDeclarationController.findAllByUserPhoneNumber
);

export default router;
