// Required import
const express = require('express');

// Import of all router
const wineRouter = require('./wineRouter');
const signupRouter = require('./signupRouter');
const loginRouter = require('./loginRouter');
const searchRouter = require('./searchRouter');
const router = express.Router();


// Master API router
router.use('/winelist', wineRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/searchtest', searchRouter);


module.exports = router;