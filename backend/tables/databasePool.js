const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://username:username@localhost:5432/test',
});

module.exports = pool;
