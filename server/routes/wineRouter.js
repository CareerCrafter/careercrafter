const express = require('express');
const wineController = require('../controllers/wineController')


const router = express.Router();

router.post('/', wineController.addWine, (req, res) =>
    res.status(201).json(res.locals.newWine)
);

router.get('/', wineController.getWines, (req, res) => {
    res.status(200).json(res.locals.allWines)
})



module.exports = router;