const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const homeCtrl = require('../../controllers/api/home');

router.get('/', homeCtrl.getHome);
router.post('/createHome', isLoggedIn, homeCtrl.createHome);
router.put('/:id/updateHome', isLoggedIn, homeCtrl.updateHome);


module.exports = router