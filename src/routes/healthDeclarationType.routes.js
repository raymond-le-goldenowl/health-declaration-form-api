import express from 'express';
import HealthDeclarationTypeController from '@/controllers/HealthDeclarationType.controller';

const router = express.Router();

router.get('/', HealthDeclarationTypeController.findAll);
router.get('/:id', HealthDeclarationTypeController.findOne);

export default router;
