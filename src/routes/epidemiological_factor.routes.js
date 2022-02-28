const express = require('express');
const router = express.Router();
const EpidemiologicalFactorController = require('../controllers/epidemiologicalFactor.controller');

router.get('/', EpidemiologicalFactorController.findAll);
router.get('/:id', EpidemiologicalFactorController.findOne);

module.exports = router;
