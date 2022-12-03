const About = require('../../models/about');

async function createAbout (req, res, next){
    try{
        await About.deleteMany({})
        const about = await About.create(req.body);
        // console.log(about)
        res.json(about)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getAbout (req, res, next){
    try{
        const about = await About.findOne({})
        res.json(about);
    }catch(err){
        res.status(400).json("Unable to retrieve About");
    }
}

async function updateAbout (req, res, next){
    try{
        const about = await About.findById(req.params.id)
        res.json(about);
    }catch(err){
        res.status(400).json("Unable to update About");
    }
}

module.exports = {
    createAbout,
    getAbout,
    updateAbout,
}

