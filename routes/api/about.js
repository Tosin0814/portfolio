const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');


const router = express.Router();
const aboutCtrl = require('../../controllers/api/about');

router.get('/', aboutCtrl.getAbout);
router.post('/createAbout', isLoggedIn, aboutCtrl.createAbout);
router.put('/:id/updateAbout', isLoggedIn, aboutCtrl.updateAbout);

module.exports = router