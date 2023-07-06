const express = require('express');
const router = express.Router();

//Controller Import
const {
    createCrashCase,
    getAllCrashCases,
    getCrashCaseById,
    deleteCrashCase
} = require('../controllers/crashCaseController');

//Create Crash Case
router.post('/', createCrashCase);
router.get('/', getAllCrashCases);
router.get('/:id', getCrashCaseById);
router.delete('/:id', deleteCrashCase);

module.exports = router;