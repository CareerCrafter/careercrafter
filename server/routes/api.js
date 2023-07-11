const express = require('express');
const wineController = require('../controllers/wineController')
const router = express.Router();




router.post('/winelist', wineController.addWine, (req, res) =>
    res.status(201).json(res.locals.newWine)
);
module.exports = router;