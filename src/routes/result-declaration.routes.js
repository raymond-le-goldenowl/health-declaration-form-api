import express from 'express';

const router = express.Router();

import ResultDeclarationController from '@/controllers/resultDeclaration.controller';

router.post('/create', ResultDeclarationController.create);

router.get(
	'/all/:user_phone_number',
	ResultDeclarationController.findAllByUserPhoneNumber
);

export default router;
