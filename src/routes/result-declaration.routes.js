import express from 'express';

const router = express.Router();

import ResultDeclarationController from '@/controllers/resultDeclaration.controller';

import { verifyAccessToken } from '@/helpers/jwt.helpers';
import resultDeclarationValidate from '@/validation/resultDeclaration.validation';

router.post('/create', verifyAccessToken, ResultDeclarationController.create);

router.post(
	'/all',
	verifyAccessToken,
	resultDeclarationValidate.findAllByUserPhoneNumberValidate,
	ResultDeclarationController.findAllByPhoneNumber
);

export default router;
