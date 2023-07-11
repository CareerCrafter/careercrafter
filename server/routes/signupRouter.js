const express = require('express');
const userController = require('../controllers/userController');
const passwordController = require('../controllers/passwordController');

const router = express.Router();

router.post('/', userController.addUsers, (req, res) => {
  res.status(201).json(res.locals.token)
})

module.exports = router;