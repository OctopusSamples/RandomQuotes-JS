const express = require('express');
const app = express();

const path = require("path");

var UserController = require('./QuotesController');

app.use('/api', UserController);

app.use('/', express.static(path.join(__dirname, "../", "www")));
app.use('/bootstrap', express.static(path.join(__dirname, '../', '../', 'node_modules', 'bootstrap', 'dist')));
app.use('/jquery', express.static(path.join(__dirname, '../', '../', 'node_modules', 'jquery', 'dist')));


app.listen(3000, () => console.log('Random Quotes app listening on port 3000!'));

