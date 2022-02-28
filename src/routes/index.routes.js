const express = require('express');
const router = express.Router();

router.use('/symptoms/', require('./symptom.routes'));

module.exports = router;
