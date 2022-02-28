const express = require('express');
const router = express.Router();
const SymptomController = require('../controllers/symptom.controller');

router.get('/', SymptomController.findAll);
router.get('/:id', SymptomController.findOne);

module.exports = router;
