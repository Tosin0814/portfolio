const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');
const multer_S3 = require('../../src/utilities/multer_S3');


const router = express.Router();
const aboutCtrl = require('../../controllers/api/about');

router.get('/', aboutCtrl.getAbout);
router.post('/createAbout', isLoggedIn, multer_S3.upload.single('image'), aboutCtrl.createAbout);
router.put('/:id/updateAbout', isLoggedIn, multer_S3.upload.single('image'), aboutCtrl.updateAbout);

module.exports = router