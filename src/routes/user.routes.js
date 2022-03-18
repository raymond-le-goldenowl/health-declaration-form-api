import express from 'express';

import UserController from '@/controllers/user.controller';

import { verifyAccessToken } from '@/helpers/jwt.helpers';
import userValidation from '@/validation/user.validation';
import resultDeclarationValidate from '@/validation/resultDeclaration.validation';

const router = express.Router();

router.post('/get-otp', UserController.requestSendOTPToUser);
router.post('/auth', UserController.auth);

router.post('/all', verifyAccessToken, UserController.getAllUsersByPhoneNumber);

router.post(
	'/request-save',
	userValidation.requestSaveValidate,
	userValidation.saveValidate,
	resultDeclarationValidate.createValidate,
	UserController.requestSave
);

router.get('/:id', verifyAccessToken, UserController.userById);

router.post(
	'/user-by-phone-number',
	verifyAccessToken,
	UserController.userByPhoneNumber
);
export default router;
