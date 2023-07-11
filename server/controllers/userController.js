
const db = require('../models/userModels')
const jwt = require('jsonwebtoken')

const userController = {

  addUsers: async (req, res, next) => {
    try {

      // Obtain params and declare search queries 
      const { username, password } = req.body;
      const values = [username, password];
      const search = 'SELECT * FROM users WHERE username = $1';

      // Check if user already exists within DB
      db.query(search, [username]).
        then((userCheck) => {
          if(userCheck.rows.length > 0) {
            return res.status(409).json({ error: 'Username already exists', status: 409 });
          };

      // Add user to DB and create token
        const insertUser = 'INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *';
        db.query(insertUser, values).
          then((addedUser) => {
            const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
            res.cookie('accessToken', accessToken, {httpOnly: true,});

            res.locals.token = {username, accessToken};

          return next();
        });
      });
    } catch (error) {
      return next(error)  
    }

  }


}

module.exports = userController;