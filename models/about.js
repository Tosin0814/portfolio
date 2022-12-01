const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    text2: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('About', aboutSchema);