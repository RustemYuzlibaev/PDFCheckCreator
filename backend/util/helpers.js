const PDFDocument = require('pdfkit');
const fs = require('fs');
const CheckTable = require('../tables/CheckTable');

function runGeneratePDFFiles() {
    async function run() {
        while (true) {
            const checksToPrint = await CheckTable.getNonPrintedChecks();
            if (checksToPrint.length === 0) {
                continue;
            }

            checksToPrint.map(order => {
                const docClient = new PDFDocument();
                const docKitchen = new PDFDocument();

                docClient.pipe(
                    fs.createWriteStream(
                        `./media/pdf/${order.order.id}_client.pdf`,
                    ),
                );
                docKitchen.pipe(
                    fs.createWriteStream(
                        `./media/pdf/${order.order.id}_kitchen.pdf`,
                    ),
                );

                docClient
                    .text(`Order: #${order.order.id}`)
                    .text(`${order.order.price}`);
                docKitchen
                    .text(`Order: #${order.order.id}`)
                    .text(`${order.order.price}`);

                docClient.end();
                docKitchen.end();

                CheckTable.setCheckToPrinted(order.order.id).catch(err =>
                    console.error(err),
                );
            });
        }
    }

    run();
}

module.exports = { runGeneratePDFFiles };
