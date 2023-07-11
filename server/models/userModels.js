const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://dxivlsyw:o2M-VU-ZgiFhF6gRcSijk-eD0RZQrlev@stampy.db.elephantsql.com/dxivlsyw'
})

module.exports = {
  query: (text, params, callback) => {
    console.log(`query ${text}`);
    return pool.query(text, params, callback);
  },
};