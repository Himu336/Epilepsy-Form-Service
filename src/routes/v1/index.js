const express = require('express');
const router = express.Router();

const checklistRoutes = require('./checklist-routes');
const heatmapRoutes = require('./heatmap-routes');

router.use('/checklists', checklistRoutes);
router.use('/heatmap', heatmapRoutes);

module.exports = router;
