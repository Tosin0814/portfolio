const Skill = require('../../models/skill');


async function createSkill (req, res, next){
    try{
        const skill = await Skill.create(req.body);
        // console.log(skill)
        res.json(skill)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getSkills (req, res, next){
    try{
        const skills = await Skill.find({})
        res.json(skills);
    }catch(err){
        res.status(400).json("Unable to retrieve skills");
    }
}

async function removeSkill (req, res, next){
    try{
        await Skill.findByIdAndRemove(req.body._id)
        const skills = await Skill.find({})
        res.json(skills);
    }catch(err){
        res.status(400).json("Unable to delete");
    }
}

module.exports = {
    createSkill,
    getSkills,
    removeSkill,
}