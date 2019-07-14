const pool = require('./databasePool');
const PrinterTable = require('./PrinterTable');

class CheckTable {
    static async createChecks(order) {
        const printers = await PrinterTable.getPrinters(order.pointId);
        const numOfPrinters = printers.length;
        const idTypePairs = printers.map(printer => {
            const id = printer.id;
            const type = printer.check_type.trim();
            return [id, type];
        });

        for (let i = 0; i < numOfPrinters; i++) {
            const pair = idTypePairs.pop();
            pool.query(
                `INSERT INTO "check" (printer_id, "type", "order", "status", pdf_file) VALUES($1, $2, $3, $4, $5)`,
                [pair[0], pair[1], JSON.stringify(order), 'new', '123'],
            );
        }
    }

    static getNonPrintedChecks() {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT "order" FROM "check" WHERE "status" = 'new'`,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res.rows);
                },
            );
        });
    }

    static setCheckToPrinted(id) {
        return new Promise((resolve, reject) => {
            pool.query(
                `UPDATE "check" SET "status" = 'printed' WHERE CAST ("order" ->> 'id' AS INTEGER) = $1`,
                [id],
                (err, res) => {
                    if (err) reject(err);
                    resolve();
                },
            );
        });
    }
}

module.exports = CheckTable;
