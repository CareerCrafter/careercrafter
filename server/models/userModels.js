const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.PG_URI2
})

module.exports = {
  query: (text, params, callback) => {
    console.log(`query ${text}`);
    return pool.query(text, params, callback);
  },
};