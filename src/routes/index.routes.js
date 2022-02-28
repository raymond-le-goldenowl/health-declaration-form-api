const express = require('express');
const router = express.Router();

router.use('/symptoms/', require('./symptom.routes'));
router.use(
	'/epidemiological-factors/',
	require('./epidemiological_factor.routes')
);

module.exports = router;
