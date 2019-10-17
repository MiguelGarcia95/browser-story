const express = require('express');
const router = express.Router();

// router.use('/', require('./stories'));
router.use('/users', require('./users'));

module.exports = router;