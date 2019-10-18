const express = require('express');
const router = express.Router();

router.use('/stories', require('./stories'));
router.use('/options', require('./options'));
router.use('/users', require('./users'));

module.exports = router;