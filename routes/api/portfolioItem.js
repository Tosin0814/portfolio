const express = require('express');
const isLoggedIn = require('../../config/isLoggedIn');

const router = express.Router();
const portfolioItemCtrl = require('../../controllers/api/portfolioItem');

router.get('/', portfolioItemCtrl.getPortfolioItems);
router.post('/createPortfolioItem', isLoggedIn, portfolioItemCtrl.createPortfolioItem);
router.get('/portfolioItem/:projectName', portfolioItemCtrl.getPortfolioItem);
router.put('/updatePortfolioItem', isLoggedIn, portfolioItemCtrl.updatePortfolioItem);
router.delete('/removePortfolioItem', isLoggedIn, portfolioItemCtrl.removePortfolioItem);

module.exports = router