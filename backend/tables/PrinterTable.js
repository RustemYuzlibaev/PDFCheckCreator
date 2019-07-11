const pool = require('./databasePool');

class PrinterTable {
    static getPrinters(pointId) {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM printer WHERE point_id = $1',
                [pointId],
                (err, res) => {
                    if (err) reject(err);

                    resolve(res.rows);
                },
            );
        });
    }
}

module.exports = PrinterTable;
