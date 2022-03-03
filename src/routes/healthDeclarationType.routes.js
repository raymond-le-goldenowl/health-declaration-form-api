const express = require('express');
const router = express.Router();
const HealthDeclarationTypeController = require('../controllers/HealthDeclarationType.controller');

router.get('/', HealthDeclarationTypeController.findAll);
router.get('/:id', HealthDeclarationTypeController.findOne);

module.exports = router;
