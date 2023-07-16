const express = require('express');
// const wineController = require('../controllers/wineController')
const wineRouter = require('./wineRouter')
const signupRouter = require('./signupRouter')
const loginRouter = require('./loginRouter')
const router = express.Router();

router.use('/:wine_Id', wineRouter);
router.use('/winelist', wineRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/userwinelist', wineRouter);

module.exports = router;