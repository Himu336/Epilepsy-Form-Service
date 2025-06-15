const express = require('express');
const router = express.Router();
const { 
    getPatients, 
    getPatientById, 
    createPatient, 
    updatePatient, 
    deletePatient 
} = require('../../controllers/patient-controller');

// Get all patients
router.get('/', getPatients);

// Get patient by ID
router.get('/:id', getPatientById);

// Create new patient
router.post('/', createPatient);

// Update patient
router.put('/:id', updatePatient);

// Delete patient
router.delete('/:id', deletePatient);

module.exports = router; 