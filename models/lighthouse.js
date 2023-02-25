const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: {
        type: String,
        required: true
    },
})

const lighthouseSchema = new Schema({
    lighthouseName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: [AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY]
    },
    height: {
        type: Number,
        min: 1,
        max: 300,       
    },
    yearFirstLit: {
        type: String,
        enum: [1700-1990]
    },
    charasteristic: {
        type: String
    },
    range: {
        type: Number,
        min: 1,
        max: 300
    },
    visitorCanEnter: {
        type: String,
        enum: [Yes, No]
    },
    visited: {
        type: String,
        enum: [Yes, No],
        required: true
    }


});

module.exports = mongoose.model('Lighthouse', lighthouseSchema);