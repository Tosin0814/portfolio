const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioImageSchema = new Schema({
    url: {
        type: String,
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
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    portfolioItemImages: [portfolioImageSchema]
}, {
    timestamps: true,
});


module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);