const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
});

const lighthouseSchema = new Schema({
    lighthouseName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
    },
    height: {
        type: String       
    },
    yearFirstLit: {
        type: Number,
        min: 1700,
        max: 1990
    },
    characteristic: {
        type: String
        
    },
    range: {
        type: String
    },
    visitorCanEnter: {
        type: String,
        enum: ['Yes', 'No']
    },
    visited: {
        type: String,
        enum: ['Yes', 'No']
    },
    reviews: [reviewSchema]
}, {
    timestamps: true


});

module.exports = mongoose.model('Lighthouse', lighthouseSchema);