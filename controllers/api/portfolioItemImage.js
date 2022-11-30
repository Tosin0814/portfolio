const PortfolioItem = require('../../models/portfolioItem');


async function createPortfolioItemImage (req, res, next){
    try{
        const portfolioItemImage = await PortfolioItem.find({title:req.params.projectName}).portfolioItemImages.create(req.body);
        console.log('created Image:', portfolioItemImage)
        res.json(portfolioItemImage)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getPortfolioItemImages (req, res, next){
    try{
        const portfolioItemImages = await PortfolioItem.find({title:req.params.projectName}).portfolioItemImages.find({})
        res.json(portfolioItemImages);
    }catch(err){
        res.status(400).json("Unable to retrieve Portfolio Item Images");
    }
}

module.exports = {
    createPortfolioItemImage,
    getPortfolioItemImages,
}