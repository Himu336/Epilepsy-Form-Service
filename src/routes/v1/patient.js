const express = require('express');
const router = express.Router();
const { getPatients, getPatientById } = require('../../controllers/patient-controller');

// Get all patients
router.get('/', getPatients);

// Get patient by ID
router.get('/:id', getPatientById);

module.exports = router; 