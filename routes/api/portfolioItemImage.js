const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const portfolioItemImageCtrl = require('../../controllers/api/portfolioItemImage');

router.post('/createPortfolioItemImage', isLoggedIn, portfolioItemImageCtrl.createPortfolioItemImage);

module.exports = router