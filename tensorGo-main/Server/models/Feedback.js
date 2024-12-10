const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Features', 'Pricing', 'Usability'],
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);
