const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const resumeItemCtrl = require('../../controllers/api/resumeItem')

router.get('/', resumeItemCtrl.getResumeItems);
router.post('/createResumeItem', isLoggedIn, resumeItemCtrl.createResumeItem);
router.put('/updateResumeItem', isLoggedIn, resumeItemCtrl.updateResumeItem);
router.delete('/removeResumeItem', isLoggedIn, resumeItemCtrl.removeResumeItem);
module.exports = router