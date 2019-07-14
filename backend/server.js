const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const config = require('./config');
const { runGeneratePDFFiles } = require('./util/helpers');
const app = express();

const Client = require('./Schemas/Client');
const CheckTable = require('./tables/CheckTable');
const doc = new PDFDocument();

app.use(cors());

const jsonParser = bodyParser.json();

runGeneratePDFFiles();

app.post('/create_checks', jsonParser, (req, res) => {
    const { id, name, phone, address, pointId, items } = req.body;
    const newOrder = Client.makeOrder({
        id,
        name,
        phone,
        address,
        items,
        pointId,
    });

    CheckTable.createChecks(newOrder);
});

app.get('/check', (req, res) => {});
app.get('/new_checks', (req, res) => {});

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
