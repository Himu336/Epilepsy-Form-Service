const express = require('express');
const router = express.Router();

const checklistRoutes = require('./checklist-routes');
const heatmapRoutes = require('./heatmap-routes');
const patientRoutes = require('./patient');

router.use('/checklists', checklistRoutes);
router.use('/heatmap', heatmapRoutes);
router.use('/patients', patientRoutes);

module.exports = router;
