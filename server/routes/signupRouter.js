const express = requrie('express');
const userController = require('../controllers/userController');
const passwordController = require('../controllers/passwordController');

const router = express.Router();

router.post('/', userController.adduser, (req, res) => {
  res.status(201).json(res.locals.token)
})

module.exports = router;