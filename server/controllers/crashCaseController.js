const mongoose = require('mongoose');
const crashCasemodel = require('../models/CrashCase');

const createCrashCase = async (req, res) => {
    try {
        const { car_vin, car_make, car_model, car_year, crash_date } = req.body;

        const CrashCase = new crashCasemodel({
            car_vin,
            car_make,
            car_model,
            car_year,
            crash_date
        });

        await CrashCase.save();

        res.status(201).json({ message: 'Data Submitted successfully' })
    } catch (error) {
        console.error('Error submitting data', error);
        res.status(500).json({ error: 'internal server error' });
    }
}

const getAllCrashCases = async (req, res) => {
    try {
        const CrashCases = await crashCasemodel.find(); // Retrieve all crash cases from the database

        res.status(200).json(CrashCases); // Return the crash cases as JSON response
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch crash cases', error });
    }
};

const getCrashCaseById = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the ID is passed as a URL parameter

        // Query the database to find the crash case with the given ID
        const crashCase = await crashCasemodel.findById(id);

        // If the crash case is not found, return an error response
        if (!crashCase) {
            return res.status(404).json({ error: 'Crash case not found' });
        }

        // Return the crash case as a JSON response
        res.json(crashCase);
    } catch (error) {
        // Handle any errors that occurred during the database operation
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateCrashCase = async (req, res) => {

};

const deleteCrashCase = async (req, res) => {

};

module.exports = { createCrashCase, getAllCrashCases, getCrashCaseById };
