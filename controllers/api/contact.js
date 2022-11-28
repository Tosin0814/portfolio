const Contact = require('../../models/contact');


async function create (req, res, next){
    try{
        await Contact.deleteMany({})
        const contact = await Contact.create(req.body);
        // console.log(contact)
        res.json(contact)
    }catch(err){
        res.status(400).json(err);
    }
}

async function index (req, res, next){
    try{
        const contacts = await Contact.findOne({})
        res.json(contacts);
    }catch(err){
        res.status(400).json("Unable to retrieve contact");
    }
}

module.exports = {
    create,
    index,
}