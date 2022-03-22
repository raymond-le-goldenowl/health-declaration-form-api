import express from 'express';
import EpidemiologicalFactorController from '@/controllers/epidemiologicalFactor.controller';

const router = express.Router();

router.get('/', EpidemiologicalFactorController.findAll);
router.get('/:id', EpidemiologicalFactorController.findOne);

export default router;
