const mongoose = require('mongoose');

const cdcSchema = new mongoose.Schema({
    general_area_of_damage: {
        type: String,
        required: false,
    },
    object_contacted_category: {
        type: String,
        required: false,
    },
    object_contacted: {
        type: String,
        required: false,
    },
    force_direction: {
        type: Number,
        required: false,
    },
    end_shift: {
        type: String,
        required: false,
    },
    clock: {
        type: Number,
        required: false,
    },
    over_underride: {
        type: String,
        required: false,
    },
    heading_angle: {
        type: Number,
        required: false,
    },
    deformation_location: {
        type: String,
        required: false,
    },
    long_lateral: {
        type: String,
        required: false,
    },
    vertical_lateral: {
        type: String,
        required: false,
    },
    distribution: {
        type: String,
        required: false,
    },
    extent: {
        type: String,
        required: false,
    },
    cdc_summary: {
        type: String,
        required: false,
    },
});

const vehicleSchema = new mongoose.Schema({

    vin: {
        type: String,
        required: true,
        unique: true
    },

    make: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    // CDC data for the vehicle
    cdcArr: [cdcSchema],

    //Delta V Data

    DV_basis: {
        type: String,
        required: false,
    },

    DV_total: {
        type: Number,
        required: false,
    },

    DV_long: {
        type: String,
        required: false,
    },

    DV_lateral: {
        type: String,
        required: false,
    },

    DV_energy_absorption: {
        type: String,
        required: false,
    },

    DV_impact_speed: {
        type: String,
        required: false,
    },

    DV_moment_arm: {
        type: String,
        required: false,
    },

    DV_barrier_equivalent_speed: {
        type: Number,
        required: false,
    },

    DV_estimated_severity: {
        type: String,
        required: false,
    },

    DV_rank: {
        type: String,
        required: false,
    },

    //Vehicle Decode

    body_class: {
        type: String,
        required: false,
    }

});

const caseSchema = new mongoose.Schema({
    case_number: {
        type: String,
        required: true,
        unique: true, // Assuming case number should be unique
    },

    crash_date: {
        type: String, // Use Date type for crash date
        required: true,
    },

    case_summary: {
        type: String,
        required: true,
    },

    vehicle_amount: {
        type: Number,
        required: false,
    },

    vehicles: [vehicleSchema], // An array of vehicles with the defined schema

    createdAt: {
        type: Date,
        default: Date.now,
    },


});


//Create and export
module.exports = mongoose.model('CrashCases', caseSchema);