const PortfolioItem = require('../../models/portfolioItem');


async function createPortfolioItemImage (req, res, next){
    // console.log("request body", req.body)
    try{
        const portfolioItem = await PortfolioItem.findById(req.body.portfolioItemId)
        // console.log('The item is: ', portfolioItem)
        portfolioItem.portfolioItemImages.push(req.body);
        portfolioItem.save()
        const updatedPortfolioItem = await PortfolioItem.findById(req.body.portfolioItemId)
        // console.log('created Image:', portfolioItemImage)
        res.json(updatedPortfolioItem)
    }catch(err){
        res.status(400).json(err);
    }
}


module.exports = {
    createPortfolioItemImage,
}