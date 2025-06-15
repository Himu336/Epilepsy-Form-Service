const { Patient } = require('../models');

const getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json({
            success: true,
            data: patients
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching patients',
            error: error.message
        });
    }
};

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            });
        }
        res.status(200).json({
            success: true,
            data: patient
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching patient',
            error: error.message
        });
    }
};

module.exports = {
    getPatients,
    getPatientById
}; 