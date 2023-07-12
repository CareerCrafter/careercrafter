const express = require('express');
const wineController = require('../controllers/wineController')


const router = express.Router();

router.post('/', wineController.addWine, (req, res) => {
    console.log('post wintelist');
    res.status(201).json(res.locals.newWine)
}
);

router.get('/', wineController.getWines, (req, res) => {
    res.status(200).json(res.locals.allWines)
})

router.put('/', wineController.updateWine, (req,res) => {
    res.status(201).json(res.locals.updatedWines)
})

router.delete('/', wineController.deleteWine, (req, res) => {
    res.status(200).json(res.locals.deletedWine)
})


module.exports = router;