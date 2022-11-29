const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const skillCtrl = require('../../controllers/api/skill');

router.get('/', skillCtrl.getSkills);
router.post('/createSkill', isLoggedIn, skillCtrl.createSkill);
router.delete('/removeSkill', isLoggedIn, skillCtrl.removeSkill);
module.exports = router