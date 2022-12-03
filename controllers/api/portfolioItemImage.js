const PortfolioItem = require('../../models/portfolioItem');


async function createPortfolioItemImage (req, res, next){
    // console.log("request body", req.body)
    try{
        const portfolioItem = await PortfolioItem.findById(req.body.portfolioItemId)
        // console.log('The item is: ', portfolioItem)
        const portfolioItemImage= await portfolioItem.portfolioItemImages.push(req.body);
        portfolioItem.save()
        // console.log('created Image:', portfolioItemImage)
        res.json(portfolioItemImage)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getPortfolioItems (req, res, next){
    try{
        const portfolioItems = await PortfolioItem.find({})
        res.json(portfolioItems);
    }catch(err){
        res.status(400).json("Unable to retrieve Portfolio Items");
    }
}

module.exports = {
    createPortfolioItemImage,
    getPortfolioItems,
}