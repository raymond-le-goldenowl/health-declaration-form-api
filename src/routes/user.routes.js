import express from 'express';
import validation from '@/validation/auth.validation';
import UserController from '@/controllers/user.controller';

const router = express.Router();

router.post('/save', UserController.save);

router.post('/request-save', UserController.requestSave);

router.get('/current', UserController.currentByPhoneNumber);

module.exports = router;
