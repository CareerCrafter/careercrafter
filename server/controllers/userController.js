const express = require('express');
const userRouter = require('./userRouter')
const wineRouter = require('./wineRouter')
const loginRouter = require('./loginRouter')
const signupRouter = require('./signupRouter')


const router = express.Router();

// router.use('/user', userRouter);
router.use('/wine', wineRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);

// router.get('/', usercontroller.login, (req, res) => {
//     res.status(200).json(res.locals.);
// });

export default router;