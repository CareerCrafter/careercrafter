const express = require('express');

const wineController = require('../controllers/wineController')

const router = express.Router();

// router.get('/', usercontroller.login, (req, res) => {
//     res.status(200).json(res.locals.)
// });


router.post('/wines', wineController.addWine, (req, res) =>
    res.status(201).json(res.locals.newWine)
);

module.exports = router;