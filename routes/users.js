const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const {validateToken} = require('../middleware/auth');

router.post('/', users.register);
router.post('/login', users.login);
router.post('/loginWithToken', validateToken, users.loginWithToken);
router.post('/logout', users.logout);

module.exports = router;  