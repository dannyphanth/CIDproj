const express = require('express');
const router = express.Router();

//Controller Import
const {
    createCrashCase,
    getAllCrashCases,
    getCrashCaseById
} = require('../controllers/crashCaseController');

//Create Crash Case
router.post('/', createCrashCase);
router.get('/', getAllCrashCases);
router.get('/:id', getCrashCaseById);

module.exports = router;