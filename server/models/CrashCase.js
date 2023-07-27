const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({

    vin: {
        type: String,
        required: true,
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
    general_area_of_damage: {
        type: String,
        required: true,
    },

    object_contacted_category: {
        type: String,
        required: true,
    },

    object_contacted: {
        type: String,
        required: true,
    },


    force_direction: {
        type: String,
        required: true,
    },

    end_shift: {
        type: String,
        required: true,
    },

    clock: {
        type: String,
        required: true,
    },

    over_underride: {
        type: String,
        required: true,
    },

    heading_angle: {
        type: String,
        required: true,
    },

    deformation_location: {
        type: String,
        required: true,
    },

    long_lateral: {
        type: String,
        required: true,
    },

    vertical_lateral: {
        type: String,
        required: true,
    },

    distribution: {
        type: String,
        required: true,
    },

    extent: {
        type: String,
        required: true,
    },

    cdc_summary: {
        type: String,
        required: true,
    },

    //Delta V Data

    DV_basis: {
        type: String,
        required: true,
    },

    DV_total: {
        type: String,
        required: true,
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
        type: String,
        required: false,
    },

    DV_estimated_severity: {
        type: String,
        required: true,
    },

    DV_rank: {
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
        type: Date, // Use Date type for crash date
        required: true,
    },

    case_summary: {
        type: String,
        required: true,
    },

    vehicles: [vehicleSchema], // An array of vehicles with the defined schema

    createdAt: {
        type: Date,
        default: Date.now,
    },
});


//Create and export
module.exports = mongoose.model('CrashCases', caseSchema);