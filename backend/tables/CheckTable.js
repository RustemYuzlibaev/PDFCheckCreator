const pool = require('./sql/databasePool');

class CheckTable {
    static createCheck({}) {
        return new Promise((resolve, reject) => {
            pool.query(``);
        });
    }
}
