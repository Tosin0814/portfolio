const Home = require('../../models/home');


async function createHome (req, res, next){
    try{
        await Home.deleteMany({})
        const home = await Home.create(req.body);
        console.log(home)
        res.json(home)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getHome (req, res, next){
    try{
        const home = await Home.findOne({})
        res.json(home);
    }catch(err){
        res.status(400).json("Unable to retrieve Home");
    }
}

async function updateHome (req, res, next){
    try{
        const home = await Home.findById(req.params.id)
        res.json(home);
    }catch(err){
        res.status(400).json("Unable to update Home");
    }
}

module.exports = {
    createHome,
    getHome,
    updateHome,
}

