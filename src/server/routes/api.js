const express = require('express');

const careerController = require('../controllers/careerController')

const router = express.Router();

router.get('/', usercontroller.login, (req, res) => {
    res.status(200).json(res.locals.)
});