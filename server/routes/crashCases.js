const express = require('express');
const router = express.Router();

//Controller Import
const {
    createCrashCase
} = require('../controllers/crashCaseController');

//Create Crash Case
router.post('/', createCrashCase);

module.exports = router;