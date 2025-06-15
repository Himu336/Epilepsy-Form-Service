const express = require('express');
const router = express.Router();
const ChecklistController = require('../../controllers/checklist-controller');

router.post('/create', ChecklistController.createChecklist);
router.get('/:id', ChecklistController.getChecklist);
router.get('/patient/:patient_id', ChecklistController.getChecklistsByPatient);

module.exports = router;
