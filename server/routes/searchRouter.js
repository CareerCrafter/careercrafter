const express = require('express');
const wineController = require('../controllers/wineController')


const router = express.Router();

router.get('/', wineController.queryWine, (req, res) => {
  res.status(200).json(res.locals.wineSearch)
})



module.exports = router;