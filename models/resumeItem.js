const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const resumeDescriptionItemSchema = new Schema({
//     text: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// })

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
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    description1:{
        type: String,
        required: true
    },
    description2:{
        type: String,
    },
    description3:{
        type: String,
    },
    description4:{
        type: String,
    },
    description5:{
        type: String,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('ResumeItem', resumeItemSchema);