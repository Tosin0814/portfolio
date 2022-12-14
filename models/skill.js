const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Skill', skillSchema);