const express = require('express');
const router = express.Router();

router.use('/user/', require('./user.routes'));

router.use('/symptoms/', require('./symptom.routes'));
router.use(
	'/epidemiological-factors/',
	require('./epidemiological_factor.routes')
);

router.use('/result-declaration/', require('./result-declaration.routes'));

module.exports = router;
