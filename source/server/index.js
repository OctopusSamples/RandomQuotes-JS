const express = require('express');
const app = express();

const path = require("path");




var UserController = require('./QuotesController');

app.use('/api', UserController);

app.use('/', express.static(path.join(__dirname, '../', 'www')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

