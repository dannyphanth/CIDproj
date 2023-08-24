const mongoose = require('mongoose');
const crashCasemodel = require('../models/CrashCase');

const createCrashCase = async (req, res) => {
    try {
        const { case_number, crash_date, case_summary, vehicles } = req.body;

        const CrashCase = new crashCasemodel({
            case_number,
            crash_date,
            case_summary,
            vehicles

        });

        const savedCrashCase = await CrashCase.save();

        // Send the saved CrashCase data as the response
        res.status(201).json(savedCrashCase);

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

const getCrashCaseByFilter = async (req, res) => {
    try {
        // Parse query parameters from the frontend
        const {
            crashDate,
            selectedVehAmountSliderValue,
            selectedVehSeverityOptions,
            selectedVehMakeOptions,
            selectedVehModelOptions,
            selectedVehYearOptions,
            selectedVehBodyClassOptions,
            selectedPrimaryDamageOptions,
            selectedSecondaryDamageOptions,
            selectedPDOFSliderValue,
            selectedDeltaVsliderValue,
            selectedBESsliderValue

        } = req.query;

        // Create a filter object based on the selected variables
        const filter = {};

        if (crashDate) {
            filter.crash_date = crashDate;
        }
        if (selectedVehAmountSliderValue && selectedVehAmountSliderValue.length === 2) {
            const [minVehAmount, maxVehAmount] = selectedVehAmountSliderValue;
            filter['vehicle_amount'] = { $gte: minVehAmount, $lte: maxVehAmount };
        }
        if (selectedVehSeverityOptions && selectedVehSeverityOptions.length > 0) {
            filter['vehicles.DV_estimated_severity'] = { $in: selectedVehSeverityOptions };
        }
        if (selectedVehMakeOptions && selectedVehMakeOptions.length > 0) {
            filter['vehicles.make'] = { $in: selectedVehMakeOptions };
        }
        if (selectedVehModelOptions && selectedVehModelOptions.length > 0) {
            filter['vehicles.model'] = { $in: selectedVehModelOptions };
        }
        if (selectedVehYearOptions && selectedVehYearOptions.length > 0) {
            filter['vehicles.year'] = { $in: selectedVehYearOptions };
        }
        if (selectedVehBodyClassOptions && selectedVehBodyClassOptions.length > 0) {
            filter["vehicles.body_class"] = { $in: selectedVehBodyClassOptions };
        }
        if (selectedPrimaryDamageOptions && selectedPrimaryDamageOptions.length > 0) {
            filter["vehicles.cdcArr.deformation_location"] = { $in: selectedPrimaryDamageOptions };
        }
        if (selectedSecondaryDamageOptions && selectedSecondaryDamageOptions.length > 0) {
            filter["vehicles.cdcArr.long_lateral"] = { $in: selectedSecondaryDamageOptions };
        }

        if (selectedDeltaVsliderValue && selectedDeltaVsliderValue.length === 2) {
            const [minDeltaV, maxDeltaV] = selectedDeltaVsliderValue;
            filter["vehicles.DV_total"] = { $gte: minDeltaV, $lte: maxDeltaV };
        }

        if (selectedPDOFSliderValue && selectedPDOFSliderValue.length === 2) {
            const [minPDOF, maxPDOF] = selectedPDOFSliderValue;
            filter["vehicles.cdcArr.force_direction"] = { $gte: minPDOF, $lte: maxPDOF };
        }

        // Filter based on selectedBESsliderValue range
        if (selectedBESsliderValue && selectedBESsliderValue.length === 2) {
            const [minBES, maxBES] = selectedBESsliderValue;
            filter["vehicles.DV_barrier_equivalent_speed"] = { $gte: minBES, $lte: maxBES };
        }


        console.log("Filter", filter)
        // Query the database using the filter
        const filteredCases = await crashCasemodel.find(filter);

        // Send the filtered cases as a response
        res.json(filteredCases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

const updateCaseData = async (req, res) => {
    try {
        const caseData = req.body;

        const caseNumber = caseData.case_number;

        const crashCase = await crashCasemodel.findOneAndUpdate(
            { case_number: caseNumber }, // Query criteria
            caseData, // New data to update
            { new: true } // Return the updated document
        );

        res.json({ message: 'Case data updated successfully using PATCH in controller' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating case data' });
    }
}


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

    try {
        const { id } = req.params; // Assuming the ID is passed as a URL parameter

        // Find the crash case by ID and delete it
        const deletedCrashCase = await crashCasemodel.findByIdAndDelete(id);

        // If the crash case is not found, return an error response
        if (!deletedCrashCase) {
            return res.status(404).json({ error: 'Crash case not found' });
        }

        // Return a success response
        res.json({ message: 'Crash case deleted successfully' });
    } catch (error) {
        // Handle any errors that occurred during the database operation
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

};

module.exports = { createCrashCase, getAllCrashCases, getCrashCaseById, getCrashCaseByFilter, updateCaseData, deleteCrashCase };
