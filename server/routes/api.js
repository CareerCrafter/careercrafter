const express = require('express');
// const wineController = require('../controllers/wineController')
const wineRouter = require('./wineRouter')
const signupRouter = require('./signupRouter')
const loginRouter = require('./loginRouter')
const router = express.Router();


router.use('/winelist', wineRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);


module.exports = router;