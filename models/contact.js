const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Contact', contactSchema);