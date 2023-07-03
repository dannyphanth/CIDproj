const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    car_vin: {
        type: Number,
        required: true
    },

    car_make: {
        type: String,
        required: true,
    },

    car_model: {
        type: String,
        required: true,
    },

    car_year: {
        type: Number,
        required: true,
    },

    crash_date: {
        type: Date,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

//Create and export
module.exports = mongoose.model('CrashCases', caseSchema);