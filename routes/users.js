const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.post('/', users.register);
router.post('/login', users.login);
router.post('/loginWithToken', users.loginWithToken);
router.post('/logout', users.logout);

module.exports = router;  