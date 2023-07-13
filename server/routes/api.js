// Required import
const express = require('express');

// Import of all router
const wineRouter = require('./wineRouter');
const searchRouter = require('./searchRouter');
const router = express.Router();


// Master API router
router.use('/winelist', wineRouter);
router.use('/searchtest', searchRouter);


module.exports = router;