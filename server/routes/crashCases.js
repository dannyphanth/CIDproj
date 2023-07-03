const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

const CrashCase = require('../models/CrashCase');

router.post('/', async (req, res) => {

    try {
        const crashCase = new CrashCase(req.body);

        await crashCase.save();

        res.status(201).json({ message: 'Data submitted successfully' });
    } catch (error) {
        console.error('Error submitting data:', error);
        res.status(500).json({ error: 'An error occurred while submitting data' });
    }
});

module.exports = router;