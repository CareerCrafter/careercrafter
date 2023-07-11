
const db = require('../models/userModels')

const userController = {

  addUsers: async (req, res, next) => {
    try {

      console.log('hit adduser pre query')

      // Obtain params and declare search queries 
      const { username, password } = req.body;
      const values = [username, password];
      const search = 'SELECT * FROM users WHERE username = $1';


      // Check if user already exists within DB
      const userCheck = await db.query(search, [username]);
      if(userCheck.rows.length > 0) {
        return res.status(409).json({ error: 'Username already exists', status: 409 })
      };

      console.log('hit adduser post username dupe check')

      // Add user to DB and create token
      const insertUser = 'INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *';

      const user = await db.query(insertUser, values);
      const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
      res.cookie('accessToken', accessToken, {httpOnly: true});

      res.locals.token = {username, accessToken};

      console.log('hit adduser token generated')

      return next();
      
    } catch (error) {
      return next(error)  
    }

  }


}

module.exports = userController;