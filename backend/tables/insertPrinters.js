const pool = require('./databasePool');
const uuidv4 = require('uuid/v4');

for (let i = 0; i < 3; i++) {
    pool.query(
        `INSERT INTO printer(name, api_key, check_type, point_id) VALUES($1, $2, $3, $4)`,
        ['HP1020', uuidv4(), 'kitchen', 1],
        (err, res) => {
            if (err) console.error(err);
        },
    );
}

pool.query(
    `INSERT INTO printer(name, api_key, check_type, point_id) VALUES($1, $2, $3, $4)`,
    ['HP1020', uuidv4(), 'client', 1],
    (err, res) => {
        if (err) console.error(err);
    },
);
