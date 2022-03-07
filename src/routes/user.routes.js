import express from 'express';
import UserController from '@/controllers/user.controller';
import userValidation from '@/validation/user.validation';

const router = express.Router();

router.post('/save', userValidation.saveValidate, UserController.save);

router.post(
	'/request-save',
	userValidation.requestSaveValidate,
	UserController.requestSave
);

router.get(
	'/current',
	userValidation.currentByPhoneNumberValidate,
	UserController.currentByPhoneNumber
);

module.exports = router;
