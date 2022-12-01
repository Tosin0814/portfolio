const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioItemImageSchema = new Schema({
    // portfolioItemId: {
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const portfolioItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    },
    portfolioItemImages: [portfolioItemImageSchema],
    github: {
        type: String,
        required: true
    },
    siteURL: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);