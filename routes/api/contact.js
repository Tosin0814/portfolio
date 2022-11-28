const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const contactCtrl = require('../../controllers/api/contact');

router.get('/', contactCtrl.index);
router.post('/createContact', isLoggedIn, contactCtrl.create);


module.exports = router