const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');
const multer_S3 = require('../../src/utilities/multer_S3');

const router = express.Router();
const homeCtrl = require('../../controllers/api/home');

router.get('/', homeCtrl.getHome);
router.post('/createHome', isLoggedIn, multer_S3.upload.single('image'), homeCtrl.createHome);
router.put('/:id/updateHome', isLoggedIn, multer_S3.upload.single('image'), homeCtrl.updateHome);


module.exports = router