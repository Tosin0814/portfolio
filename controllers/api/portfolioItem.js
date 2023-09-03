const PortfolioItem = require('../../models/portfolioItem');


async function createPortfolioItem (req, res, next){
    try{
        const portfolioItem = await PortfolioItem.create(req.body);
        // console.log(portfolioItem)
        res.json(portfolioItem)
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
async function getPortfolioItem (req, res, next){
    try{
        const portfolioItems = await PortfolioItem.findOne({title: req.params.projectName})
        res.json(portfolioItems);
    }catch(err){
        res.status(400).json("Unable to retrieve Portfolio Items");
    }
}

async function removePortfolioItem (req, res, next){
    try{
        await PortfolioItem.findByIdAndRemove(req.body._id)
        const portfolioItems = await PortfolioItem.find({})
        res.json(portfolioItems);
    }catch(err){
        res.status(400).json("Unable to delete");
    }
}

async function updatePortfolioItem (req, res, next){
    try{
        await PortfolioItem.findByIdAndUpdate(req.body._id)
        const portfolioItems = await PortfolioItem.find({})
        res.json(portfolioItems);
    }catch(err){
        res.status(400).json("Unable to update");
    }
}

module.exports = {
    createPortfolioItem,
    getPortfolioItems,
    getPortfolioItem,
    updatePortfolioItem,
    removePortfolioItem,
}