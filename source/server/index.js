const express = require('express');
const app = express();
const config = require('../config/config');
const path = require("path");
const os = require('os');

const QuotesController = require('./QuotesController');
app.use('/api', QuotesController.router);

app.use('/', express.static(path.join(__dirname, "../", "www")));
app.use('/bootstrap', express.static(path.join(__dirname, '../', '../', 'node_modules', 'bootstrap', 'dist')));
app.use('/jquery', express.static(path.join(__dirname, '../', '../', 'node_modules', 'jquery', 'dist')));

app.get('/config', function (req, res) {
    res.json(config.client || {});
});

app.get('/server', function(req,res) {
    res.json({ 'pid': process.pid, platform: os.platform() });
});

const server = app.listen(config.port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});