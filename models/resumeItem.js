const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const descriptionItemSchema = new Schema({
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const resumeItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    descriptions: [descriptionItemSchema]
}, {
    timestamps: true,
});


module.exports = mongoose.model('ResumeItem', resumeItemSchema);