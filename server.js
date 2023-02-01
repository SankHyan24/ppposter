'use strict'
// libs
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// local imports
const imprint = require('./app/imprint');

let intialPath = path.join(__dirname, "public");
console.log(intialPath);

const app = express();
app.use(bodyParser.json());
app.use(express.static(intialPath));
// router
app.listen(7878, (req, res) => {
    console.log('listening on port 7878......')
})
app.get('/', (req, res) => { res.sendFile(path.join(intialPath, "index.html")); });

app.post('/get-imprints', imprint.get_imprint);
app.post('/add-imprint', imprint.add_imprint);

