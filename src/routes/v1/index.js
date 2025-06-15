const express = require('express');
const router = express.Router();

const checklistRoutes = require('./checklist-routes');
const heatmapRoutes = require('./heatmap-routes');
const patientRoutes = require('./patient');

console.log('Loading V1 Routes:');
console.log('  checklistRoutes:', typeof checklistRoutes.stack === 'object' ? 'Express Router' : 'Invalid');
console.log('  heatmapRoutes:', typeof heatmapRoutes.stack === 'object' ? 'Express Router' : 'Invalid');
console.log('  patientRoutes:', typeof patientRoutes.stack === 'object' ? 'Express Router' : 'Invalid');

router.use('/checklists', checklistRoutes);
router.use('/heatmap', heatmapRoutes);
router.use('/patients', patientRoutes);

module.exports = router;
