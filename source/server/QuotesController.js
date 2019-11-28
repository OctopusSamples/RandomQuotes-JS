var express = require('express');
var router = express.Router();
const config = require('../config/config');
const fs = require("fs");
const path = require("path");

function RandomQuote() {
    return LoadData("quotes.txt").then((quotes) =>
        LoadData("authors.txt").then(authors => {
            let randomQuoteIndex = getRandomInt(quotes.length);
            return {
                appVersion: config.appVersion,
                environmentName: config.environmentName,
                quote: quotes[randomQuoteIndex],
                author: authors[randomQuoteIndex]
            };
        }));
}

function LoadData(filename) {
    return new Promise((res, rej) => fs.readFile(path.join(__dirname, "data", filename), "UTF-8", (err, data) => {
        if (err) {
            rej();
        } else {
            res(data.split(/[\r\n]+/))
        }
    }));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

router.get('/quote', function (req, res) {
    RandomQuote().then(quote => res.status(200).send(quote)).catch(s => res.status(500));
});

module.exports = {
    router,
    RandomQuote
};