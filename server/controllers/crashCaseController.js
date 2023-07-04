const mongoose = require('mongoose');
const crashCasemodel = require('../models/CrashCase');


// const createCrashCase = async (req, res) => {
//     // ... create a new crash case

//     res.send("Controller...");
//     try {
//         const Case = new crashCase({ ...req.body });
//         Case = await Case.save();

//         res.status(201).json({ message: 'Data submitted successfully' });
//     } catch (error) {
//         console.error('Error submitting data:', error);
//         res.status(500).json({ error: 'An error occurred while submitting data' });
//     }
// };

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
    // get all crash cases
};

module.exports = { createCrashCase };
