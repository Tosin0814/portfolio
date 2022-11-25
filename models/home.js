const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Home', homeSchema);



