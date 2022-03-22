const express = require('express');
const router = express.Router();

router.use('/symptoms/', require('./symptom.routes'));

router.use(
	'/health-declaration-types/',
	require('./healthDeclarationType.routes')
);
module.exports = router;
