import express from 'express';

import SymptomController from '@/controllers/symptom.controller';

const router = express.Router();

router.get('/', SymptomController.findAll);

router.get('/:id', SymptomController.findOne);

module.exports = router;
