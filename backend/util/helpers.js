const CheckTable = require('../tables/CheckTable');

async function generatePDFFiles() {
    const checksToPrint = await CheckTable.getChecks();
    checksToPrint.map(order => {
        const { id, items, price, client } = order.order;
    });
}

module.exports = { generatePDFFiles };
