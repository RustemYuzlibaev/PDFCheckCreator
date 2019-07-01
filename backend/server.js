const express = require('express');
const app = express();
const testOrderDetails = require('./clinetSide/Client');

const PORT = 3000;

app.post('/create_checks', (req, res) => {});

app.get('/check', (req, res) => {});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
