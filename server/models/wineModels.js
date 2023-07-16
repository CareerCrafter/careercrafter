const { Pool } = require('pg');
// const PG_URI = 'postgres://sfxtwvav:ztnRS6-snC-0w5-cXXIh3QjBtH92cDSL@mahmud.db.elephantsql.com/sfxtwvav';

const pool = new Pool({
    connectionString: process.env.PG_URI
});
module.exports = {
    query: (text, params, callback) => {
        
        return pool.query(text, params, callback);
    },
};