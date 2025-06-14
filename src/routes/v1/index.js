const express = require('express');
const router = express.Router();

const checklistRoutes = require('./checklist-routes');

router.use('/checklists', checklistRoutes);

module.exports = router;
