const ResumeItem = require('../../models/resumeItem');


async function createResumeItem (req, res, next){
    try{
        const resumeItem = await ResumeItem.create(req.body);
        console.log(resumeItem)
        res.json(resumeItem)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getResumeItems (req, res, next){
    try{
        const resumeItems = await ResumeItem.find({})
        res.json(resumeItems);
    }catch(err){
        res.status(400).json("Unable to retrieve Resume Items");
    }
}

async function removeResumeItem (req, res, next){
    try{
        await ResumeItem.findByIdAndRemove(req.body._id)
        const resumeItems = await ResumeItem.find({})
        res.json(resumeItems);
    }catch(err){
        res.status(400).json("Unable to delete");
    }
}

async function updateResumeItem (req, res, next){
    try{
        await ResumeItem.findByIdAndUpdate(req.body._id)
        const resumeItems = await ResumeItem.find({})
        res.json(resumeItems);
    }catch(err){
        res.status(400).json("Unable to update");
    }
}

module.exports = {
    createResumeItem,
    getResumeItems,
    updateResumeItem,
    removeResumeItem,
}