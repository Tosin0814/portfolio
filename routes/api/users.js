const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

router.get('/check-token', isLoggedIn, usersCtrl.checkToken)

module.exports = router
